
//import function with response about message

const {acceptChallenge} = require('./response/challengerResponse');
const {myTurn} = require('./response/myTurnResponse');
const {myTurnWall} = require('./response/myTurnWall');



const acceptChallengeResponse = (message) =>{
    return acceptChallenge(message);
};

const myTurnResponsePawn = (message) =>{
    return myTurn(message);
};

const userList = (message) =>{
    return console.log(message);
}

const myTurnResponseWall = (message) =>{
    return myTurnWall(message);
};

const gameOver = (message) =>{
    console.log("-----GAME OVER-----");
    console.log("--FinalScore--");
    console.log("-Player 1-");
    console.log(message.player_1);
    console.log("-Player 1 Score -");
    console.log(message.score_1);
    console.log("-Player 2-");
    console.log(message.player_2);
    console.log("-Player 2 Score -");
    console.log(message.score_2);
    return ;
};


exports.FactoryServerEvent = {
    acceptChallengeResponse,
    userList,
    myTurnResponsePawn,
    myTurnResponseWall,
    gameOver
}