exports.viewVerticalLine = (verticialNearWalls,board,other_side) =>{
    //catch Errors 
    if(!verticialNearWalls || !board  || !other_side){
        throw new Error("Error Need all the parameters");
    }

    let countEmptySquareLeft = 0;
    let countEmptySquareRigth = 0;

    board[nearestPawn.column + 1 ].forEach(row => {row == " "  && countEmptySquareLeft++});
    board[nearestPawn.column - 1 ].forEach(row => {row == " "  && countEmptySquareRigth++});

    if(countEmptySquareLeft == 3 && countEmptySquareLeft  > countEmptySquareRigth){
        return(nearestPawn)
    }else{
        nearestPawn.row --;
        return(nearestPawn)
    }
}