
exports.momePawn = ({message,from_row,from_col,to_row,to_col})=>{

    //Catch and returns erros 
    if(!message || !from_row || !from_col || !to_row  || !to_col ){
        return "Error missing elements "
    }
    // prevent pass letters or simbos to server 
    if(!isNaN(from_row) || !isNaN(from_col) || !isNaN(to_row) || !isNaN(to_col) ){
        return "Error some of the coordinates are not numbers "
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