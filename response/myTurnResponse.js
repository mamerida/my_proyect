//function convert string to matrix
const {makeBoard} = require('../board/board');
const {makeRotateBoard} = require('../board/rotateBoard');
//fuction returns pouns position
const {viewPawns} = require('../logic/viewPiecePosition');
//view position in board and return posible moves
const {lookMoves} = require('../logic/lookMoves');
//search wall and stydy special moves
const {searchWalls} = require('../logic/searchWalls');
//considere if a enemy pawn is opposite me and be in edge of board
const {EdgeOfTable} = require('../logic/EdgeOfTable')
//view posibility to jump or move diagonally
const {canJump} = require('../logic/canJump');
//recibe pawns and return best option
const {selectBestOption} = require('../logic/selectBestOption');
const {findMove} = require('../logic/findMove');
const {errorCodes} = require('../constants/errors');

//my turns manages the board, chose the best option and send the response 
exports.myTurn = (message) =>{
  //catch without message 
    if(!message){
        throw new Error(errorCodes.messageErrorMesagge);
    }

    //makes board from string 
    let useRotateBoard = false;
    let board =[];
    if(message.data.side == "S"){
        useRotateBoard = true;
        board = makeRotateBoard(message.data.board);
    }else{
        board = makeBoard(message.data.board);
    }

    //obtain piece position 
    const position = viewPawns(board, message);
    //look for possible moves in table
    const positionMoves= lookMoves(position); 
    //look around for each pawn and verify walls and other team pawns
    const positionsWithOutWalls = searchWalls(board,positionMoves,message.data.side);
    //look around for each pawn and verify walls and other team pawns
    const positionsSpecialCondition = EdgeOfTable(board,positionsWithOutWalls);
    //finally look if i can jump or make diagonal move
    const finalsMoves = canJump(board,positionsSpecialCondition,message.data.side);
    //of all of the option filter according to moves and position on board 
    const bestOption = selectBestOption(finalsMoves);
    //make message to send
    const messageToSend = findMove(message,bestOption,useRotateBoard);

    return messageToSend
    
}
