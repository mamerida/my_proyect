


exports.viewPawns = (board, message) =>{
    //catch errors 
    if(!board || !message){
        throw new Error("Error wrong parameters") ;
    }

    //get my side of board
    const my_side = message.data.side;
    
    //make a response
    const piecePosition =[]
    
    //find my pieces on the board and return rows and columns of each
    board.forEach((row, indexRow) => {
        row.forEach((column,indexColum) => {
            if(column == my_side){
               const pawn = new Object();
               pawn.row = indexRow;
               pawn.column = indexColum;
               piecePosition.push(pawn)
            }
        });
    });

    return piecePosition
}