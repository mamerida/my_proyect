
const {bestPown} = require('../utils/selectBestPown')

exports.selectBestOption = (finalsMoves) =>{
    let pieceToMove ={}
    const canAdvance =[];
    const moveLeftOrRigth = [];
    const moveDown = []; 
    //can advance ? 
    finalsMoves.forEach(pawn => {
        // I organize according to possible movements
        if(pawn.moves.up || pawn.moves.upJump || pawn.moves.upLeft || pawn.moves.upRigth){
            canAdvance.push(pawn)
        }

        if(pawn.moves.left ||  pawn.moves.rigth ){
            moveLeftOrRigth.push(pawn)
        }

        if(pawn.moves.down){
            moveDown.push(pawn)
        }
    });

    //prefer always advance
    if(canAdvance.length > 0){
        pieceToMove = bestPown(canAdvance);
    } 

    //in other case move to rigth or left 
    if( canAdvance.length == 0 && moveLeftOrRigth.length > 0){
        pieceToMove = bestPown(moveLeftOrRigth);
    } 

    //or moveDown
    if(canAdvance.length == 0 && moveLeftOrRigth.length == 0 && moveDown.length > 0){
        pieceToMove = bestPown(moveDown);
   } 

    return pieceToMove;

}