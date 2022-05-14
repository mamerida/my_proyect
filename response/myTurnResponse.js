
//function convert string to matrix
const {makeBoard} = require('../board/board');

//fuction returns pouns position
const {viewPowns} = require('../utils/viewPiecePosition');

const {lookMoves} = require('../utils/lookMoves');

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
            "side": "N",
            "remaining_moves": 50.0,
            "board": "  N     N     N                                                                                                                                                                                                                                                                   S     S     S  ",
            "turn_token": "087920d0-0e6b-4716-9e77-add550a006aa",
            "game_id": "ab16e71c-caeb-11eb-975e-0242c0a80004"
        }
    }

    //makes board from string 
    const board = makeBoard(message.data.board);

    //obtain piece position 
    const position = viewPowns(board, message);

    //look for possible moves
    const positionMoves= lookMoves(position);

    console.log(positionMoves)


}

this.myTurn("hola")