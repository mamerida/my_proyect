//function convert string to matrix
const {makeBoard} = require('../board/board');
//fuction returns pouns position
const {viewPowns} = require('../logic/viewPiecePosition');
//fuction return nearest pawn 
const {nearPawn} = require('../utils/nearPawn');

const {viewLine} = require('../utils/viewLine');

//call method make message to server
const{putWall} = require('../moves/putWall')

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

    let nearestPawn  = nearPawn(position,other_side);
    
    //comprobe if i can put a wall front of selected pawn
    // const isClear  = viewLine(nearestPawn,board,other_side); // return true or false 

    // if(!isClear){
    //     let newPositios = position.filter(pawn => pawn.row != nearestPawn.row && pawn.column != nearestPawn.column );
    //     nearestPawn  = nearPawn(newPositios,other_side);
    // }

    if(other_side == "S"){
        //message,row,col,direction
        return putWall(message,parseInt((nearestPawn.row /2)- 1) ,parseInt(nearestPawn.column/2),"h")
    }
    return putWall(message,parseInt(nearestPawn.row /2) ,parseInt(nearestPawn.column/2),"h")

}