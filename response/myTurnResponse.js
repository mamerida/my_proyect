
const {makeBoard} = require('../board/board');

//my turns manages the board, chose the best option and send the response 
exports.myTurn = (message) =>{

    //catch without message 
    if(!message){
        return;
    }

    //makes board from string 
    const board = makeBoard(message.data.board)

}