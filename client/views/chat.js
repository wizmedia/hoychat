Template.chat.conversations = function(){
	return Conversations.find({'room': Session.get('room')});
}


Template.chat.events({
	'click button': function(){
		var statement = $('textarea[name=statement]').val();

		if(statement == ''){
			return false;
		}

		var chat = {
			'statement': statement,
			'room': Session.get('room'),
			'user_id': Meteor.userId(),
			'user': Meteor.user().profile
		};

		Conversations.insert(chat);

		$('textarea[name=statement]').val('');
	}
});