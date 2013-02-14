Meteor.subscribe('conversations');

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

		Meteor.call('formatStatement', Conversations.insert(chat));

		$('textarea[name=statement]').val('');
	}
});

Template.chat.helpers({
	linkify: function(statement){
		var urls = App.findUrls(statement);
		urls.forEach(function(url){
			statement = statement.replace(url, '<a href="http://'+url.replace('http://', '')+'" target="new">'+url+'</a>');
		});
		console.log(statement);
		return statement;
	}
});