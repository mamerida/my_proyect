const {viewEdge} = require("../utils/viewEnge");

exports.EdgeOfTable = (board,positionMoves) =>{
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