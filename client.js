var twilio = require("/usr/local/lib/node_modules/twilio");
// now for the rest of it...
// implement gpio functionality for non-gui access
// implement dynamic outbound number


var accountSid = 'AC94c28a23360c8d180b576c01539028be';
var authToken = "89f3c0bce24cf40e9e37473cbc097b6a";
var client = twilio(accountSid, authToken);

// just makes a call to a phone right now

	client.makeCall({
	  to: '+13039182097',
	  from: '+17076746183',
	  url: 'http://twimlets.com/message?Message%5B0%5D=http%3A%2F%2Fwww.directlinkupload.com%2Fuploads%2F50.161.13.11%2FbananaPhone.mp3&'
	}, function(err, responseData) { 
	  console.log(responseData.from);
	
	});


