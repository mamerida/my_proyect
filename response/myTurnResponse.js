
//function convert string to matrix
const {makeBoard} = require('../board/board');

const {makeRotateBoard} = require('../board/rotateBoard');

//fuction returns pouns position
const {viewPowns} = require('../logic/viewPiecePosition');

//view position in board and return posible moves
const {lookMoves} = require('../logic/lookMoves');

//search wall and stydy special moves
const {searchWalls} = require('../logic/searchWalls');

//view posibility to jump or move diagonally
const {canJump} = require('../logic/canJump');

//recibe powns and return best option
const {selectBestOption} = require('../logic/selectBestOption');

const {findMove} = require('../logic/findMove');

//my turns manages the board, chose the best option and send the response 
exports.myTurn = (message) =>{

    //catch without message 
    if(!message){
        return;
    }
     
    message ={
        "event": "your_turn",
        "data": {
            "player_2": "uno",
            "player_1": "dos",
            "score_2": 0.0,
            "walls": 10.0,
            "score_1": 0.0,
            "side": "S",
            "remaining_moves": 50.0,
            "board": "  N     N     N                                                                                                                                                                                                                                                                   S     S     S  ",
            "turn_token": "087920d0-0e6b-4716-9e77-add550a006aa",
            "game_id": "ab16e71c-caeb-11eb-975e-0242c0a80004"
        }
    }

    //makes board from string 
    let useRotateBoard= false;
    let board =[];
    if(message.data.side == "S"){
        useRotateBoard=true;
        board = makeRotateBoard(message.data.board);
    }else{
        board = makeBoard(message.data.board);
    }

    //obtain piece position 
    const position = viewPowns(board, message);

    //look for possible moves in table
    const positionMoves= lookMoves(position);

    //look around for each pown and verify walls and other team pawns
    const positionsWithOutWalls = searchWalls(board,positionMoves,message.data.side);

    //finally look if i can jump or make diagonal move
    const finalsMoves = canJump(board,positionsWithOutWalls,message.data.side);

    //of all of the option filter according to moves and position on board 
    const bestOption = selectBestOption(finalsMoves);

    const messageToSend = findMove(message,bestOption,useRotateBoard)

}

this.myTurn("hola")