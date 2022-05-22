//function convert string to matrix
const {makeBoard} = require('../board/board');
//fuction returns pouns position
const {viewPawns} = require('../logic/viewPiecePosition');
//fuction return nearest pawn 
const {nearPawn} = require('../utils/nearPawn');

const {viewLine} = require('../utils/viewLine');

const {viewVerticalLine} = require('../utils/viewVerticalLine');

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
    const position = viewPawns(board, message);
    
    const [nearPawnWithOutWalls,vertical] = viewLine(position,board,other_side); 

    //if i cant putl horizontal wall  I will put vertical call
    let finalPositionVertical = "";
    if(vertical>2){
        const verticialNearWalls = nearPawn(position,other_side);
        finalPositionVertical  = viewVerticalLine(verticialNearWalls,board); // return final position

    }

    if(finalPositionVertical){
        return putWall(message,parseInt((finalPositionVertical.row /2)) ,parseInt(finalPositionVertical.column/2),"v")
    }


    if(other_side == "S"){
        //message,row,col,direction
        return putWall(message,parseInt((nearPawnWithOutWalls.row /2)- 1) ,parseInt(nearPawnWithOutWalls.column/2),"h")
    }
    
    return putWall(message,parseInt(nearPawnWithOutWalls.row /2) ,parseInt(nearPawnWithOutWalls.column/2),"h")

}