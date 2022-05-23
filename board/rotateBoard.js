const {errorCodes} = require('../constants/errors')
exports.makeRotateBoard = (board) =>{
    if(!board || board.length != 289){
        throw new Error(errorCodes.errorBoard)
    }
    //convert string to array
    const  messageBoard=  Array.from(board);
    let finalBoardReverse = []
    let index2 = 0;
    //create columns of my board
    for(let i = 0; i <17 ; i++){
        //create row of my board 
        let row=[]
        for(let u = 0; u <17 ; u ++){
            row.push(messageBoard[index2]);
            index2++;
        }
        row.reverse();
        finalBoardReverse.push(row)
    }
    finalBoardReverse.reverse();
    return finalBoardReverse
    
}
