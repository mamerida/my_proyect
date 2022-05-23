const {errorCodes} = require('../constants/errors');

exports.nearPawn= (position,side) =>{
    //catch Errors 
    if(!position || !side){
        throw new Error(errorCodes.messageErrorParameters);
    }
    let nearPawn = position[0]
    //verify if my opponet have S i will put a wall front of  pawn with smaller row
    position.forEach(pawn => {
        if( side == "S" && ( nearPawn.column == 0 || nearPawn.row == 16 || nearPawn.row > pawn.row)){
            nearPawn = pawn;
        }else if(side == "N" && (nearPawn.column == 0 || nearPawn.row  == 0 || nearPawn.row < pawn.row)){
                nearPawn = pawn;
        }
    });
    return nearPawn;
}