
const {errorCodes} = require('../constants/errors');

exports.movePawn = (message,from_row,from_col,to_row,to_col)=>{
    //Catch and returns erros 
    if(!message || from_row == null  || from_col ==null || to_row == null  || to_col == null ){
        console.log(from_row)
        throw new Error(errorCodes.messageErrorParameters);
    }
    // prevent pass letters or simbos to server 
    if(isNaN(from_row) || isNaN(from_col) || isNaN(to_row) || isNaN(to_col) ){
        throw new Error(errorCodes.errorNumbers);
    }
    //return JSON with accion 
    return JSON.stringify({
        action: "move", 
        data: {
            "game_id": message.data.game_id,
            "turn_token": message.data.turn_token,
            "from_row": from_row,
            "from_col": from_col,
            "to_row": to_row,
            "to_col": to_col
        }
    })
}