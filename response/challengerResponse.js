

//create function to response a challenge
exports.acceptChallenge = (event) =>{

    //use if to prevent challenge of other partner 
    if(event.opponent != "mamerida2013@gmail.com"){
        return ;
    }
    //return response 
    return JSON.stringify({
        action: "accept_challenge", 
        data: {
            "challenge_id": event.challenge_id
        }
    })
}