exports.viewLine = (nearestPawn,board,other_side) =>{

    //catch Errors 
    if(!nearestPawn || !board  || !other_side){
        throw new Error("Error need all parameters");
    }
    let countEmptySquare = 0;
    let thereAreWall = true;
    
    let rowToSearch  = 0;
    if(other_side =="N"){
        rowToSearch = + 1;
    }else{
        rowToSearch = - 1;
    }

    //i cant block the way of the pawn. So look the row and view the number of empty spaces
    board[nearestPawn.row + rowToSearch].forEach(row => {row == " "  && countEmptySquare++});

    //Is there other wall ?    
    if(board[nearestPawn.row + rowToSearch][nearestPawn.column - 1] != " " && board[nearestPawn.row + rowToSearch][nearestPawn.column - 2] != " " && 
        board[nearestPawn.row + rowToSearch][nearestPawn.column - 3] != " "){
            thereAreWall = false;
    }

    // if i block row i wont block the row 
    if(countEmptySquare < 4 || !thereAreWall ){
        return thereAreWall ;
    }

    return thereAreWall;



}