// const Setting = require('../models/Setting');
// const axios = require('axios');

// async function sendSms({ phoneNumber, message }) {
//   const url = `http://91.98.31.211/sms/default.aspx?cbody=${message}&cmobileno=${phoneNumber}&cUsername=arsan123&cpassword=Arsan123&cDomainName=bazarmofid&cEncoding=1&cfromnumber=3000212171`;

//   try {
//     return await axios({ method: 'get', url });
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function sendSmsToExhibitor(admin) {
//   if (admin.type === 'exhibitors' && admin.phoneNumber.number && admin.phoneNumber.code) {
//     const exhibitorsWelcomeMessage = await Setting.findOne({ key: 'exhibitorsWelcomeMessage' });

//     if (exhibitorsWelcomeMessage && exhibitorsWelcomeMessage.isActive) {
//       const phoneNumber = admin.phoneNumber.code + admin.phoneNumber.number;
//       const message = exhibitorsWelcomeMessage.value;
//       sendSms({ phoneNumber, message });

//       return;
//     }
//   }
// }

// async function sendSmsToUser(user) {
//   if (user.role === 'user' && user.phoneNumber) {
//     const visitorsWelcomeMessage = await Setting.findOne({ key: 'visitorsWelcomeMessage' });

//     if (visitorsWelcomeMessage && visitorsWelcomeMessage.isActive) {
//       const message = visitorsWelcomeMessage.value;
//       sendSms({ phoneNumber: user.phoneNumber, message });

//       return;
//     }
//   }
// }

// module.exports = {
//   sendSmsToExhibitor,
//   sendSmsToUser,
// };
