//use dotenv to protect my token when upload to github
//and if Its necesarry change on environment i will can change the token or anything in .env fije 
require('dotenv').config()
const {WebSocket} = require("ws")
//import factory with different response about message
const {FactoryServerEvent} = require("./factoryEvents");


//URL OF WEBSOCKET
const socket = new WebSocket(`wss://4yyity02md.execute-api.us-east-1.amazonaws.com/ws?token=${process.env.TOKEN}`);


//make listener
socket.on('open', function open() {

    //catch message
    socket.on('message',  async function  catchMessage(data) {

        try{
            //convert message to JSON to work with him
            let message = JSON.parse(data) ;
            //filter filter according to the message
            switch (message.event) {

                case "challenge":
                    const response = FactoryServerEvent.acceptChallengeResponse(message);
                    socket.send(response);
                    break;
    
                case "your_turn":
                    myTurn(message);
                    break;
    
                case "list_users":
                    FactoryServerEvent.userList(message);
                    break;

                default:
                    console.log(message);
                    break;
            }


        }catch(e){
            console.log("Error : ",e)
        }
    });
});





