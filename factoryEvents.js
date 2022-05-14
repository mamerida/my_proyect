
//import function with response about message

const {acceptChallenge} = require('./response/challengerResponse');


const acceptChallengeResponse = (message) =>{
    acceptChallenge(message);
};

const userList = (message) =>{
    console.log(message)
}



exports.FactoryServerEvent = {
    acceptChallengeResponse,
    userList
}