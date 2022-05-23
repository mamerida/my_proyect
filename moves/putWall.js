const {errorCodes} = require('../constants/errors');

exports.putWall = (message,rowTo,colTo,direction)=>{
    //Catch and returns erros 
    if(!message || rowTo == null  || colTo == null || !direction ){
        throw new Error(errorCodes.messageErrorParameters) 
    }
    // prevent pass letters or simbos to server 
    if(isNaN(rowTo) || isNaN(colTo)){
        throw new Error(errorCodes.errorNumbers)
    }
    const directionArray = ["v","h"]
    if(directionArray.indexOf(direction) == -1 ){
        throw new Error(errorCodes.wrongDirection)
    }
    //return JSON with accion 
    return JSON.stringify({
        action: "wall", 
        data: {
            "game_id": message.data.game_id,
            "turn_token": message.data.turn_token,
            "row": rowTo,
            "col": colTo,
            "orientation": direction,
        }   
    })
}