exports.myTurnWall = (message) =>{
    //catch without message 
    if(!message){
        throw new Error("Error need a message");
    }

    //determine my side
    const my_side = message.data.side;
    //hello world asdasdasdasdasd
    const other_side = message.data.side  == "S" ? "N" : "S";
    console.log("my_side",my_side,"Other_side",other_side)
}