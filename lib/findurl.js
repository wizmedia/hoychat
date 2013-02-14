(function() {
	App.findUrls = function( text )
	{
	    var source = (text || '').toString();
	    var urlArray = [];
	    var url;
	    var matchArray;

	    // Regular expression to find FTP, HTTP(S) and email URLs.
	    var regexToken = /[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi;

	    // Iterate through any URLs in the text.
	    while( (matchArray = regexToken.exec( source )) !== null )
	    {
	        var token = matchArray[0];
	        urlArray.push( token );
	    }

	    return urlArray;
	}
})();