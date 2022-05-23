const {viewOtherPieces} = require("../utils/viewOtherPieces");

//I see each piece and check if it can jump
exports.canJump = (board,positions,side) =>{
    positions.forEach(pawn => {
        let finishMoves={};
        //iterate por moves
        for (const moves  in pawn.moves) {         
            viewOtherPieces(finishMoves,side,board,moves,pawn)
        };
        pawn.moves = finishMoves;      
    });
    return(positions);
}