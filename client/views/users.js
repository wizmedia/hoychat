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

Template.users.helpers({
	'notLobby': function(){
		return !Session.equals('room', 'lobby');
	}
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

			Session.set('room', 'lobby');
		}
	}
});