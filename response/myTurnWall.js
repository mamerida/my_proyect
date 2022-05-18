exports.myTurnWall = (message) =>{
    //catch without message 
    if(!message){
        throw new Error("Error need a message");
    }

    //determine my side
    const my_side = message.data.side;
    const other_side = message.data.side  == "S" ? "N" : "S";
    
}