Meteor.subscribe('rooms');
Template.rooms.rooms = function(){
	return Rooms.find({'users': Meteor.userId()});
}

Template.rooms.helpers({
	'is_active': function(id){
		if(Session.equals('room', id)){
			return 'active';
		}
	}
});

Template.rooms.events({
	'click #add': function(){
		var name = window.prompt('Enter the Name of the Room','');
		if(name != '' && name != null){
			Rooms.insert({
				'name': name,
				'users': [Meteor.userId()]
			});
		}
	},
	'click .room': function(el){
		Session.set('room', el.target.id);
	},

	'click #logout': function(){
		Meteor.logout();
	}
});

Meteor.startup(function(){
	if(Meteor.user()){
		Session.set('room', 'lobby');
	}
});