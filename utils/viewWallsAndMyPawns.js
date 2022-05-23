const {errorCodes} = require('../constants/errors');
const {pointsOfMoves} = require('../constants/pontsPerMove');

exports.viewWallsAndMyPawns = (pawn,finishMoves,side,board,move) =>{
    //if i want move piece forward . I need verify walls .I need verify my other pieces 
    if(!pawn||!finishMoves||!side||!board||!move ){
        throw new Error(errorCodes.messageErrorParameters);
    }
    if(move == pointsOfMoves.up && (board[pawn.row+1][pawn.column] == "-" || board[pawn.row+2][pawn.column] == side)){
        delete finishMoves.up;
    }
    if(move == pointsOfMoves.left && (board[pawn.row][pawn.column+1] == "|" ||  board[pawn.row][pawn.column+2] == side)){
        delete finishMoves.left;
    }
    if(move == pointsOfMoves.rigth && (board[pawn.row][pawn.column-1] == "|"  || board[pawn.row][pawn.column-2] == side)){
        delete finishMoves.rigth;
    }
    if(move == pointsOfMoves.down && (board[pawn.row-1][pawn.column] == "-" || board[pawn.row-2][pawn.column] == side)){
        delete finishMoves.down;
    }
    return finishMoves;
}