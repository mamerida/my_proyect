const {errorCodes} = require('../constants/errors');

exports.bestPawn =(arrayPawns)=>{ 
    if(!arrayPawns){
        throw new Error(errorCodes.messageErrorParameters);
    }
    //of all my pawns select near opponent side pawn
    let pawn =arrayPawns[0];
    arrayPawns.forEach(element => {
        if(pawn.row < element.row){
            pawn= element
        }
    });
    return pawn;
    
}