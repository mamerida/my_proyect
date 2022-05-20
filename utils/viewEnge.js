
//if i want move piece forward . I need verify walls and need verify my other pieces 
exports.viewEdge = (pown,finishMoves,board,move) =>{
    if(move == "up" && pown.row == 14 && board[pown.row+2][pown.column] != " " ){
        delete finishMoves.up;
    }
    if(move == "left" && pown.column == 14 && board[pown.row][pown.column + 2 ] != " "){
        delete finishMoves.left;
    }
    if(move == "rigth"  && pown.column == 2 && board[pown.row][pown.column - 2 ] != " " ){
        delete finishMoves.rigth;
    }
    if(move == "down" && pown.row == 2 && board[pown.row - 2][pown.column ] != " " ){
        delete finishMoves.down;
    }
    return finishMoves;
}
