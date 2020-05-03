"use strict";
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
let token = "2542b6dde93eeb06acfcd2a877435e27087507360ca59c20fec447c24d27eb91";
let key = "6c147513d4eca2b4d93373501e1b028d";
let redirectURL = "http://0b8feb7e.ngrok.io"

const app = express();

// Запрос на данные приложения
axios(`https://api.trello.com/1/members/me/?key=${key}&token=${token}`)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })

// Запрос на Webhook
// axios(
//     `https://api.trello.com/1/webhooks/?callbackURL=${redirectURL}&idModel=5abbe4b7ddc1b351ef961414`, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//       },
//     }
//   )
//   .then((response) => {
//     console.log(`Response: ${response.status} ${response.statusText}`);
//     return response.data
//   })
//   .then((text) => console.log(text))
//   .catch((err) => console.error(err));

app.listen(3001, () => {
  console.log("Сервер запущен на http://localhost:3001");
});
