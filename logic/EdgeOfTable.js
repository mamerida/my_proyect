const {viewEdge} = require("../utils/viewEnge");

exports.EdgeOfTable = (board,positionMoves) =>{
    //iterate in pieces 
    positionMoves.forEach(pawn => {
        const finishMoves=pawn.moves;
        //iterate por moves
        for (const move  in pawn.moves) {
                viewEdge(pawn,finishMoves,board,move)
        };
        pawn.moves = finishMoves;
    });
    // return pieces with new possible moves 
    return positionMoves;
}