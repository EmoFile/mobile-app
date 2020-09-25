import * as functions from 'firebase-functions';
const express = require('express')
const app = express();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript


app.get('/data', (request: any, response: any) => {
    response.json({ value: true})
});


exports.api = functions.https.onRequest(app)

export const returnJson = functions.https.onRequest((request, response) => {
    let jsonResponse = {
        value: true
    };
    response.json(jsonResponse)
});

export const helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});
