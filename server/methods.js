Meteor.methods({
	formatStatement: function(id){
		var statement = Conversations.findOne(id);
		var urls = App.findUrls(statement.statement);
		var formatted = '';

		urls.forEach(function(el){
			var response = Meteor.http.get('http://api.embed.ly/1/oembed', {
				params: {
					url: el,
					key: Embedly.key
				}
			});
			console.log(response);
			formatted = '<div>' + JSON.parse(response.content).html + '</div>';
		});

		Conversations.update(id,{$set:{
			'html': formatted
		}});
	}
});