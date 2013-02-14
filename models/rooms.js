Rooms = new Meteor.Collection('rooms');

Rooms.allow({
	remove: function(){
		if(Meteor.user()){
			return true;
		}

		return false;
	},

	insert: function(){
		if(Meteor.user()){
			return true;
		}

		return false;
	},

	update: function(){
		if(Meteor.user()){
			return true;
		}

		return false;
	}
});