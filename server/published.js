Meteor.publish('conversations', function(){
	return Conversations.find();
});

Meteor.publish('rooms', function(){
	return Rooms.find();
});