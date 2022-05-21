exports.viewWallsAndMyPawns = (pawn,finishMoves,side,board,move) =>{
    //if i want move piece forward . I need verify walls .I need verify my other pieces 

    if(move == "up" && (board[pawn.row+1][pawn.column] == "-" || board[pawn.row+2][pawn.column] == side)){
        delete finishMoves.up;
    }
    if(move == "left" && (board[pawn.row][pawn.column+1] == "|" ||  board[pawn.row][pawn.column+2] == side)){
        delete finishMoves.left;
    }
    if(move == "rigth" && (board[pawn.row][pawn.column-1] == "|"  || board[pawn.row][pawn.column-2] == side)){
        delete finishMoves.rigth;
    }
    if(move == "down" && (board[pawn.row-1][pawn.column] == "-" || board[pawn.row-2][pawn.column] == side)){
        delete finishMoves.down;
    }
    return finishMoves;
}