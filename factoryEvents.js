
//import function with response about message

const {acceptChallenge} = require('./response/challengerResponse');
const {myTurn} = require('./response/myTurnResponse');


const acceptChallengeResponse = (message) =>{
    return acceptChallenge(message);
};

const myTurnResponse = (message) =>{
    return myTurn(message);
};

const userList = (message) =>{
    console.log(message)
}



exports.FactoryServerEvent = {
    acceptChallengeResponse,
    userList,
    myTurnResponse
}