'use strict';

const options = require('../config/config');
const AfricasTalking = require('africastalking')(options.AT);
/* Set up mongoose */

module.exports = {

	ussd : (req, res)=>{
  var message = "";
  console.log('its');

  var sessionId   = req.body.sessionId;
  var serviceCode = req.body.serviceCode;
  var phoneNumber = req.body.phoneNumber;
  var text 	      = req.body.text;
	var l = text.length;

  console.log(sessionId, serviceCode, phoneNumber, text);

  var length = text.split('*').length;
  var txt = text.split('*');
  ussdloop();

  function ussdloop(){

  if (text === '' || text === '2*1*00' || text === '2*2*00' || text === '2*3*00') {
	 message = "CON Welcome to Jilinde. Press\n";
     message += "1: To Report \n";
     message += "2: How To Get Justice.\n";
     message += "0: Exit";
  }
  else if (text === '1' || text === '2*1*00*1' || text === '2*2*00*1' || text === '2*3*00*1') {
        message = 'CON Select Gategory.\n';
				message += "1: Rape Case \n";
				message += "2: Child Abuse \n";
				message += "3: Gender Based Violence \n";
				message += "0: Exit \n";

  }
	else if (text === '1*1' || text === '1*2' || text === '1*3') {
		message = 'CON Describe the case.\n';
		message += '\n';

	}
  else if (text === '2') {
        message = 'CON What Incident Do You Want To Know More About\n';
				message += "1: Rape Case \n";
				message += "2: Child Abuse \n";
				message += "3: Gender Based Violence \n";
				message += "0: Exit \n";
  }
	else if (text === '2*1' || text === '2*2' || text === '2*3') {
		message = 'CON Place a report on via one of our platforms (mobile app, website or ussd).On reporting include your mobile No.Jilinde will asign one of its lawyers to your case and we will contact with more details.\n';
		message += '00. Back.\n';
		message += '0. Exit.';
	}
	else if (text === '0' || text === '1*0' || text === '2*0' || text === '2*1*0' || text === '2*2*0' || text === '2*3*0') {
		message = "END Thanks for trusting Jilinde."
	}

  res.contentType('text/plain');
  res.send(message, 200);
}
}

}
