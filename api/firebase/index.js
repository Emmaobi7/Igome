/*
initializes firebase for this server
dependency: credentials key not pushed for security reasons
*/
const firebase = require('firebase-admin');
const credentials = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);


firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
});

module.exports = firebase;