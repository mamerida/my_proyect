exports.viewWalls = (pown,finishMoves,side,board,move) =>{
    //if i want move piece forward . I need verify walls .I need verify my other pieces 
    if(move == "up" && (board[pown.row+1][pown.column] == "-" || move == "up" && board[pown.row+2][pown.column] == side)){
        delete finishMoves.up;
    }
    if(move == "left" && board[pown.row][pown.column+1] == "|" || (move == "left" && board[pown.row][pown.column+2] == side)){
        delete finishMoves.left;
    }
    if(move == "rigth" && (board[pown.row][pown.column-1] == "|"  || board[pown.row][pown.column-2] == side) ){
        delete finishMoves.rigth;
    }
    if(move == "down" && (board[pown.row-1][pown.column] == "-" || board[pown.row-2][pown.column] == side) ){
        delete finishMoves.down;
    }
    return finishMoves;
}