
exports.returnCoordinates=(finalsMoves,from_row,from_col)=>{
    let to_row = 0;
    let to_col = 0;
    switch(true){
        case finalsMoves.moves.upJump == 'upJump':
            to_row = from_row + 2;
            to_col = from_col;
            break;
        case finalsMoves.moves.upLeft == 'upLeft':
            to_row = from_row + 1;
            to_col = from_col + 1;
            break;  
        case finalsMoves.moves.upRigth === 'upRigth':
            to_row = from_row + 1;
            to_col = from_col - 1;
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
        case finalsMoves.moves.down === "down":
            to_row = from_row - 1;
            to_col = from_col;
            break;   
        default:
            break;      
    }
    return [to_row,to_col]
}