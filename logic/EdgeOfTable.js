exports.EdgeOfTable = (board,positionMoves) =>{

    const viewEdge = (pown,finishMoves,board,move) =>{
        //if i want move piece forward . I need verify walls .I need verify my other pieces 
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
    

    //iterate in pieces 
    positionMoves.forEach(pown => {
        const finishMoves=pown.moves;
        //iterate por moves
        for (const move  in pown.moves) {
                viewEdge(pown,finishMoves,board,move)
        };
        pown.moves = finishMoves;
    });
    // return pieces with new possible moves 
    return positionMoves;

}