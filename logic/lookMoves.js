const {errorCodes} = require('../constants/errors');
const {pointsOfMoves} = require('../constants/pontsPerMove');

exports.lookMoves = (position) =>{
    //catch errors 
    if(!position){
        throw new Error(errorCodes.wrongParameters);
    }
    //verify posible moves
    position.forEach(pawns => {
        pawns.moves = {};
        if(  pawns.row != 16){
            pawns.moves.up = pointsOfMoves.up;
        }
        if(pawns.row != 0){
            pawns.moves.down =  pointsOfMoves.down;
        }
        if(pawns.column != 16){
            pawns.moves.left = pointsOfMoves.left;
        }
        if(pawns.column != 0){
            pawns.moves.rigth = pointsOfMoves.rigth;
        }
    });

    return position;
}