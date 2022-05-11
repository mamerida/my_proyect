//use dotenv to protect my token when upload to github
//and if Its necesarry change on environment i will can change the token or anything in .env fije 
require('dotenv').config()
const {WebSocket} = require("ws")
const {acceptChallenge} = require("./response/challengerResponse");
const {myTurn} = require("./response/myTurnResponse");


//URL OF WEBSOCKET
const socket = new WebSocket(`wss://4yyity02md.execute-api.us-east-1.amazonaws.com/ws?token=${process.env.TOKEN}`);


//make listener
socket.on('open', function open() {

    //catch message
    socket.on('message', function catchMessage(data) {
        //convert message to JSON to work with him
        let message = JSON.parse(data) ;

        //filter filter according to the message
        switch (message.event) {

            case "challenge":
                const response = acceptChallenge(message);
                socket.send(response);
                break;

            case "your_turn":
                myTurn(message);
                break;

            default:
                console.log(message);
                break;
        }
    });


});



//catch error
socket.on('error', function error(e) {
    console.log("Error : ",e)
});

//when close WS connection
socket.on('close', function close() {
    console.log('disconnected');
  });



