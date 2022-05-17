const {movePawn} = require('../moves/movePawn')
exports.findMove = (message,finalsMoves,useRotateBoard) =>{
    console.log(useRotateBoard)
    let from_row = parseInt(finalsMoves.row/2);
    let from_col = parseInt(finalsMoves.column/2);
    let to_row = 0;
    let to_col = 0;
    
    switch(true){
        case finalsMoves.moves.upJump:
            to_row = from_row + 2;
            to_col = from_col;
            break;
        case finalsMoves.moves.upLeft == 'upLeft':
            to_row = from_row + 1;
            to_col = from_col + 1;
            break;  
        case finalsMoves.moves.upRigth === 'upRigth':
            to_row = from_row - 1;
            to_col = from_col + 1;
            break;     
        case finalsMoves.moves.up === "up":
            to_row = from_row + 1;
            to_col = from_col;
            break; 
        case finalsMoves.moves.left === "left":
            to_row = from_row;
            to_col = from_col + 1;
            break;
        case finalsMoves.moves.rigth === "rigth":
            to_row = from_row;
            to_col = from_col - 1;
            break;  
        case finalsMoves.moves.rigth === "down":
            to_row = from_row - 1;
            to_col = from_col;
            break;   
        default:
            break;      
    }
    if(useRotateBoard){
        return  movePawn(message,(8-from_row),(8-from_col),(8-to_row),(8-to_col));
    }
    return  movePawn(message,from_row,from_col,to_row,to_col);
}