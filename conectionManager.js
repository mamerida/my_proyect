//use dotenv to protect my token when upload to github
//and if Its necesarry change on environment i will can change the token or anything in .env fije 
require('dotenv').config()
const {WebSocket} = require("ws")


//URL OF WEBSOCKET
const socket = new WebSocket(`wss://4yyity02md.execute-api.us-east-1.amazonaws.com/ws?token=${process.env.TOKEN}`);


//make listener
socket.on('open', function open() {
    console.log("Im in");
});





socket.on('error', function error(e) {
    console.log("Error : ",e)
});



