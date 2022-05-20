const {movePawn} = require('../moves/movePawn');
const {returnCoordinates} = require('../utils/returnCoordinates');

exports.findMove = (message,finalsMoves,useRotateBoard) =>{
    let from_row = parseInt(finalsMoves.row/2);
    let from_col = parseInt(finalsMoves.column/2);
    const [to_row,to_col] = returnCoordinates(finalsMoves,from_row,from_col)

    if(useRotateBoard){
        return  movePawn(message,(8-from_row),(8-from_col),(8-to_row),(8-to_col));
    }
    return  movePawn(message,from_row,from_col,to_row,to_col);
}