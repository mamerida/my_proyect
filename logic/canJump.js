const {viewEdge} = require("../utils/viewOtherPieces");

//I see each piece and check if it can jump
exports.canJump = (board,positions,side) =>{
    positions.forEach(pown => {
        let finishMoves={};
        //iterate por moves
        for (const moves  in pown.moves) {         
            viewOtherPieces(finishMoves,side,board,moves,pown)
        };
        pown.moves = finishMoves;
        
    });
    return(positions);
}