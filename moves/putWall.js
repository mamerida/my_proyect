exports.putWall = (message,rowTo,colTo,direction)=>{

    //Catch and returns erros 
    if(!message || rowTo == null  || colTo == null || !direction ){
        throw new Error("Error missing elements ") 
    }
    // prevent pass letters or simbos to server 
    if(isNaN(rowTo) || isNaN(colTo)){
        throw new Error("Error some of the coordinates are not numbers")
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