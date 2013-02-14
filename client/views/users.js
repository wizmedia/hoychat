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