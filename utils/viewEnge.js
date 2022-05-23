
const {pointsOfMoves} = require('../constants/pontsPerMove');
const {errorCodes} = require('../constants/errors');

//if i want move piece forward . I need verify walls and need verify my other pieces 
exports.viewEdge = (pawn,finishMoves,board,move) =>{
    //catch Errors 
    if(!pawn || !board  || !move || !finishMoves){
        throw new Error(errorCodes.messageErrorParameters);
    }
    if(move == pointsOfMoves.up && pawn.row == 14 && board[pawn.row+2][pawn.column] != " " ){
        delete finishMoves.up;
    }
    if(move == pointsOfMoves.left && pawn.column == 14 && board[pawn.row][pawn.column + 2 ] != " "){
        delete finishMoves.left;
    }
    if(move == pointsOfMoves.rigth  && pawn.column == 2 && board[pawn.row][pawn.column - 2 ] != " " ){
        delete finishMoves.rigth;
    }
    if(move == pointsOfMoves.down && pawn.row == 2 && board[pawn.row - 2][pawn.column ] != " " ){
        delete finishMoves.down;
    }   
    return finishMoves;
    
}
