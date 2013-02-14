Meteor.publish('conversations', function(){
	return Conversations.find();
});

Meteor.publish('rooms', function(){
	return Rooms.find();
});

Meteor.publish('allusers', function(){
	return Meteor.users.find()
});

Meteor.startup(function(){

})