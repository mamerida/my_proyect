//function convert string to matrix
const {makeBoard} = require('../board/board');
//fuction returns pouns position
const {viewPowns} = require('../logic/viewPiecePosition');
//fuction return nearest pawn 
const {nearPawn} = require('../utils/nearPawn');



exports.myTurnWall = (message) =>{
    //catch without message 
    if(!message){
        throw new Error("Error need a message");
    }
    //make my board
    const board = makeBoard(message.data.board);

    //determine my opponent side
    const other_side = message.data.side  == "S" ? "N" : "S";

    //obtain enemy piece position 
    message.data.side = other_side;
    const position = viewPowns(board, message);

    const nearestPawn  = nearPawn(position,other_side);

    console.log(nearestPawn);

}