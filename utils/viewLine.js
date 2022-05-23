const {errorCodes} = require('../constants/errors');

exports.viewLine = (pawns,board,other_side) =>{

    //catch Errors 
    if(!pawns || !board  || !other_side){
        throw new Error(errorCodes.messageErrorParameters);
    }
    let rowToSearch  = 0;
    if(other_side =="N"){
        rowToSearch = + 1;
    }else{
        rowToSearch = - 1;
    }
    let posiblePawns = [];
    let vertical = 0
    //special condition forEach view if a soth pawn is on Enge to prevent out of renge Error
    pawns.forEach(nearestPawn => {
        if(nearestPawn.row == 0 && other_side =="S" ){
            pawns = pawns.filter((item) => nearestPawn.row != item.row)
        }
    });
    //view next row of pawn and determine if i can put a wall or need a vertical wall
    pawns.forEach(nearestPawn => {
        if(0 < nearestPawn.row + rowToSearch <= 16 && board[nearestPawn.row + rowToSearch][nearestPawn.column] == " "
         && board[nearestPawn.row + rowToSearch][nearestPawn.column - 1] == " " && board[nearestPawn.row + rowToSearch][nearestPawn.column - 2] == " "){ 
            posiblePawns.push(nearestPawn);
        }else{
            vertical ++;
        }
    });

    let finalPawn=posiblePawns[0]
    //select near pawn of selection
    posiblePawns.forEach(element => {
        if(other_side =="N" && element.row > finalPawn.row ){
            finalPawn=element
        }
        if(other_side =="S" && element.row < finalPawn.row ){
            finalPawn=element
        }
     });
    return [finalPawn,vertical];

}