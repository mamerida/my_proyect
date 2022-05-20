const {viewWalls} = require('../utils/viewWalls');

exports.searchWalls = (board,positionMoves,side) =>{
    //iterate in pieces 
    positionMoves.forEach(pown => {
        const finishMoves=pown.moves;
        //iterate por moves
        for (const moves  in pown.moves) {
                viewWalls(pown,finishMoves,side,board,moves)
        };
        pown.moves = finishMoves;
    });
    // return pieces with new possible moves 
    return positionMoves;
}