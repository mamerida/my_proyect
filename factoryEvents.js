
//import function with response about message

const {acceptChallenge} = require('./response/challengerResponse');
const {myTurn} = require('./response/myTurnResponse');
const {myTurnWall} = require('./response/myTurnResponse');



const acceptChallengeResponse = (message) =>{
    return acceptChallenge(message);
};

const myTurnResponsePawn = (message) =>{
    return myTurn(message);
};

const userList = (message) =>{
    console.log(message)
}

const myTurnResponseWall = (message) =>{
    return myTurnWall(message);
};





exports.FactoryServerEvent = {
    acceptChallengeResponse,
    userList,
    myTurnResponsePawn,
    myTurnResponseWall
}