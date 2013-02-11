Template.rooms.rooms = function(){
	return Rooms.find();
}

Meteor.startup(function() {
	$('#lobby').parent('li').addClass('active');
});

Template.rooms.events({
	'click #add': function(){
		var name = window.prompt('Enter the Name of the Room','');
		if(name != '' && name != null){
			Rooms.insert({
				'name': name,
				'users': [Meteor.userId]
			});
		}
	},
	'click .room': function(el){
		Session.set('room', el.target.id);
		$('.room').parent('li').removeClass('active');
		$('#'+Session.get('room')).parent('li').addClass('active');
	},

	'click #logout': function(){
		Meteor.logout();
	}
});