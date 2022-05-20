exports.viewLine = (nearestPawn,board,other_side) =>{

    //catch Errors 
    if(!nearestPawn){
        throw new Error("Error need a Pawn");
    }
    if(!board){
        throw new Error("Error need a board");
    }
    if(!other_side){
        throw new Error("Error need the oponent side");
    }
    let countEmptySquare = 0;
    let thereAreWall = true;
    
    if(other_side =="N"){
        const rowToSearch =  +1;
    }else{
        const rowToSearch =  -1;
    }

    board[nearestPawn.row + rowToSearch].forEach(row => {row == " "  && countEmptySquare++});

        //i cant block the way of the pawn. So look the row and view the number of empty spaces
        if(board[nearestPawn.row + rowToSearch][nearestPawn.column - 1] != " " && 
            board[nearestPawn.row + rowToSearch][nearestPawn.column - 2] != " " && 
            board[nearestPawn.row + rowToSearch][nearestPawn.column - 3] != " "){

                thereAreWall = false;
        }

    // if(other_side =="N"){
    //     // //i cant block the way of the pawn. So look the row and view the number of empty spaces
    //     board[nearestPawn.row + 1].forEach(row => {row == " "  && countEmptySquare++});

    //     if(board[nearestPawn.row + 1][nearestPawn.column - 1] != " " && 
    //         board[nearestPawn.row + 1][nearestPawn.column - 2] != " " && 
    //         board[nearestPawn.row + 1][nearestPawn.column - 3] != " "){

    //             thereAreWall = false;
    //     }
    // }

    // if(other_side =="S"){
    //     board[nearestPawn.row - 1].forEach(row => {  
    //         row == " "  && countEmptySquare++  
    //     });
    //     if(board[nearestPawn.row - 1][nearestPawn.column -1] != " " &&
    //         board[nearestPawn.row - 1][nearestPawn.column - 2] != " " &&
    //         board[nearestPawn.row - 1][nearestPawn.column - 3] != " " ){

    //             thereAreWall = false;
    //     }  
    // }

    // if i block row i wont block the row 
    if(countEmptySquare < 4 || !thereAreWall ){
        return thereAreWall ;
    }

    return thereAreWall;



}