exports.searchWalls = (board,positionMoves,side) =>{

    const viewWalls = (pown,finishMoves,side,board,move) =>{
            
        //if i want move piece forward . I need verify walls 
        if(move == "up" && board[pown.row+1][pown.column] == "-"){
            return finishMoves;
        }
        if(move == "left" && board[pown.row][pown.column+1] == "|"){
            return finishMoves;
        }
        if(move == "rigth" && board[pown.row][pown.column-1] == "|" ){
            return finishMoves;
        }
        if(move == "down" && board[pown.row-1][pown.column] == "-" ){
            return finishMoves;
        }

        //if i want move piece forward . I need verify my other pieces
        if(move == "up" && board[pown.row+2][pown.column] == side){
            return finishMoves;
        }
        if(move == "left" && board[pown.row][pown.column+2] == side){
            return finishMoves;
        }
        if(move == "rigth" && board[pown.row][pown.column-2] == side){
            return finishMoves;
        }
        if(move == "down" && board[pown.row-2][pown.column] == side){
            return finishMoves;
        }

        //make possible moves object
        if(move == "up"){
        return finishMoves.up = true;
        }
        if(move == "left"){
        return finishMoves.left = true;
        }
        if(move == "rigth"){
        return finishMoves.rigth = true;
        }
        if(move == "down"){
        return finishMoves.down = true;
        }

    }
    
    //iterate in pieces 
    positionMoves.forEach(pown => {
        const finishMoves={}
        //iterate por moves
        for (const moves  in pown.moves) {
                viewWalls(pown,finishMoves,side,board,moves)
        };
        pown.moves = finishMoves;
    });
    // return pieces with new possible moves 
    return positionMoves;
}