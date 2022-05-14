

exports.makeBoard = (board) =>{
    
    if(!board || board.length != 289){
        return "Error"
    }
    //convert string to array
    const  messageBoard=  Array.from(board);

    let finalBoard = [];
    let index = 0;

    //create columns of my bora
    for(let i = 0; i < 17 ; i++){
        
        //create row of my board 
        let row=[]
        for(let u = 0; u <17 ; u ++){
            row.push(messageBoard[index]);
            index++;
        }
        finalBoard.push(row)
    }

    return finalBoard

}


message = json.dumps(
    {
        'action': action,
        'data': data,
        }
    )
print(message)
await websocket.send(message)





    

