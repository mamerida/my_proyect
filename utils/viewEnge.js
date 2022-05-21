
//if i want move piece forward . I need verify walls and need verify my other pieces 
exports.viewEdge = (pawn,finishMoves,board,move) =>{

    //catch Errors 
    if(!pawn || !board  || !move || !finishMoves){
        throw new Error("Error need all parameters");
    }
    if(move == "up" && pawn.row == 14 && board[pawn.row+2][pawn.column] != " " ){
        delete finishMoves.up;
    }
    if(move == "left" && pawn.column == 14 && board[pawn.row][pawn.column + 2 ] != " "){
        delete finishMoves.left;
    }
    if(move == "rigth"  && pawn.column == 2 && board[pawn.row][pawn.column - 2 ] != " " ){
        delete finishMoves.rigth;
    }
    if(move == "down" && pawn.row == 2 && board[pawn.row - 2][pawn.column ] != " " ){
        delete finishMoves.down;
    }
    
    return finishMoves;
}
