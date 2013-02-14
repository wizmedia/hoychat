Conversations = new Meteor.Collection('conversations');

Conversations.allow({
	remove: function(){
		if(Meteor.user().profile.mention == 'boss'){
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