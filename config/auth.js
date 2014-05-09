// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: 'your-secret-clientID-here', // your App ID
		'clientSecret' 	: 'your-client-secret-here', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey': 'jmWBEbbWulCoU4EeysUwXNe6X',
 'consumerSecret': 'HQiXk8TdNHcGpe7GM5NNHv52nZCI7wa99VQgSQF0cG03xtnMGx',
 'callbackURL': "http://127.0.0.1:1337/auth/twitter/callback"
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};