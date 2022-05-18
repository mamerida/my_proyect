exports.putWall = (message,row,col,direction)=>{

    //Catch and returns erros 
    if(!message || !row || !col || !direction ){
        return "Error missing elements "
    }
    // prevent pass letters or simbos to server 
    if(!isNaN(row) || !isNaN(col)){
        return "Error some of the coordinates are not numbers "
    }

    //prevent sent other caractacter that h or v in direction
    if(direction != "h" || direction !="v"){
        return "Error on directions "
    }

    //return JSON with accion 
    return JSON.stringify({
        action: "move", 
        data: {
            "game_id": message.data.game_id,
            "row": row,
            "col": col,
            "direction": direction,
        }
    })
}