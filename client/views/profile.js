Meteor.users.allow({
	update: function(){
		return true;
	}
});

Template.profile.events({
	'click #saveProfile': function(){
		Meteor.users.update(
			{_id: Meteor.userId()},
			{$set:{
				'profile': $('#profileForm').serializeObject()
			}},
			{multi: false}
		);
	}
});