
//import function with response about message

const {acceptChallenge} = require('./response/challengerResponse');
const {myTurn} = require('./response/myTurnResponse');
const {myTurnWall} = require('./response/myTurnWall');
const {errorCodes} = require('./constants/errors');



const acceptChallengeResponse = (message) =>{
    if(!message){
        throw new Error(errorCodes.messageErrorMesagge)
    }
    return acceptChallenge(message);
};

const myTurnResponsePawn = (message) =>{
    if(!message){
        throw new Error(errorCodes.messageErrorMesagge)
    }
    return myTurn(message);
};

const myTurnResponseWall = (message) =>{
    if(!message){
        throw new Error(errorCodes.messageErrorMesagge)
    }
    return myTurnWall(message);
};

const userList = (message) =>{
    if(!message){
        throw new Error(errorCodes.messageErrorMesagge)
    }
    return console.log(message);
}


const gameOver = (message) =>{
    if(!message){
        throw new Error(errorCodes.messageErrorMesagge)
    }
    console.log("-----GAME OVER-----");
    console.log("--FinalScore--");
    console.log("-Player 1-");
    console.log(message.data.player_1);
    console.log("-Player 1 Score -");
    console.log(message.data.score_1);
    console.log("-Player 2-");
    console.log(message.data.player_2);
    console.log("-Player 2 Score -");
    console.log(message.data.score_2);
    return ;
};


exports.FactoryServerEvent = {
    acceptChallengeResponse,
    userList,
    myTurnResponsePawn,
    myTurnResponseWall,
    gameOver
}