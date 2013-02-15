Meteor.subscribe('allusers');

Template.users.users = function(){
	if(Session.equals('room', 'lobby')){
		return Meteor.users.find();
	}else{
		var room = Rooms.findOne(Session.get('room'));
		if(room){
			return Meteor.users.find({'_id': {$in: room.users}});
		}
	}
};

Template.invite.users = function(){
	if(!Session.equals('room', 'lobby')){
		return Meteor.users.find({});
	}
}

Template.users.helpers({
	notLobby: function(){
		return !Session.equals('room', 'lobby');
	},
});

Template.invite.helpers({
	selectable: function(){
		var room = Rooms.findOne(Session.get('room'));

		return (
			// User is not the same with current user
			this._id != Meteor.userId() &&
			// User is not yet in the room
			!_.contains(room.users, this._id)
		);
	},

});

Template.users.events({
	'click #exit-room': function(){
		var room = Rooms.findOne(Session.get('room'));
		if(room.users){
			var users = [];
			var i = 0;
			room.users.forEach(function(el){
				if(el != Meteor.userId()){
					users.push(el);
				}
			});

			Rooms.update(Session.get('room'), {$set:{
				users: users
			}});

			// TODO: Go to previous room
			Session.set('room', 'lobby');
		}
	}
});

Template.invite.invited = [];

Template.invite.events({
	'click input.checkbox': function(event){
		if(event.target.checked){
			Template.invite.invited.push(event.target.value);
		}
	},
	'click #invite-users-button': function(event){
		var room = Rooms.findOne(Session.get('room'));

		Rooms.update(room._id, {$set:{
			users: _.uniq(room.users.concat(Template.invite.invited))
		}});
	}
});
