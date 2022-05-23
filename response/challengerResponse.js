const {errorCodes} = require('../constants/errors');

//create function to response a challenge
exports.acceptChallenge = (message) =>{
    //comprobe challenge_id to prevent send a response without challenge_id
    if(!message || !message.data.challenge_id){
        throw new Error(errorCodes.messageErrorMesagge)
    }

    //use if to prevent challenge of other partner 
    // if(message.data.opponent != "mamerida2013@gmail.com"){
    //     throw new Error("im sorry out of service")
    // }
    
    //return response 
    return JSON.stringify({
        action: "accept_challenge", 
        data: {
            "challenge_id": message.data.challenge_id
        }
    })
}