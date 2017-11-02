const functions = require('firebase-functions');
const app = require('./app');

exports.api = functions.https.onRequest(app);
