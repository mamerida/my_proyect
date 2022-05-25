const {pointsOfMoves} = require('../constants/pontsPerMove');

exports.returnCoordinates=(finalsMoves,from_row,from_col)=>{
    //depende of move and initial position return final position of pawns
    let to_row = 0;
    let to_col = 0;
    switch(true){
        case finalsMoves.moves.upJump == pointsOfMoves.upJump:
            to_row = from_row + 2;
            to_col = from_col;
            break;
        case finalsMoves.moves.upLeft == pointsOfMoves.upLeft:
            to_row = from_row + 1;
            to_col = from_col + 1;
            break;  
        case finalsMoves.moves.upRigth === pointsOfMoves.upRigth:
            to_row = from_row + 1;
            to_col = from_col - 1;
            break;     
        case finalsMoves.moves.up === pointsOfMoves.up:
            to_row = from_row + 1;
            to_col = from_col;
            break; 
        case finalsMoves.moves.left === pointsOfMoves.left:
            to_row = from_row;
            to_col = from_col + 1;
            break;
        case finalsMoves.moves.rigth === pointsOfMoves.rigth:
            to_row = from_row;
            to_col = from_col - 1;
            break;  
        case finalsMoves.moves.down === pointsOfMoves.down:
            to_row = from_row - 1;
            to_col = from_col;
            break;   
        default:
            break;      
    }
    return [to_row,to_col]
}