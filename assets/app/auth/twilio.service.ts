// var twilio = require('twilio');
//
// var accountSid = 'blah'; // Your Account SID from www.twilio.com/console
// var authToken = 'blah';   // Your Auth Token from www.twilio.com/console
//
// var client = twilio(accountSid, authToken);
//
//
// @Injectable()
// export class TwilioService {
//     constructor(private http: Http, private errorService: ErrorService) {}
//
// sendSMS(number) {
//   client.messages.create({
//       body: 'Hello from Pill Bank. 911 has been called.',
//       to: '+19086604495',  // Text this number
//       from: '+12017293581' // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid));
// }
