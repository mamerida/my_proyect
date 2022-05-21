const {viewWallsAndMyPawns} = require('../utils/viewWallsAndMyPawns');

exports.searchWalls = (board,positionMoves,side) =>{
    //iterate in pieces 
    positionMoves.forEach(pawn => {
        const finishMoves=pawn.moves;
        //iterate por moves
        for (const moves  in pawn.moves) {
            viewWallsAndMyPawns(pawn,finishMoves,side,board,moves)
        };
        pawn.moves = finishMoves;
    });
    // return pieces with new possible moves 
    return positionMoves;
}