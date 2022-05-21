    //seach opponent pawns front of my piece if there is empy slot i can jump
    exports.viewOtherPieces = (finishMoves,side,board,moves,pawn)=>{

        if(moves == "up" && pawn.row <= 14 ){
            finishMoves.up = pointsOfMoves.up;
        }

        //see my next square and junm
        if(moves == "up" && pawn.row <= 12 && board[pawn.row + 2][pawn.column] != " "){
            finishMoves.upJump = pointsOfMoves.upJump;
        }

        // can i do diagonal movement
        // verifi if there are opponet pawn and a wall
        if(moves == "up" && pawn.row <=12 && board[(pawn.row + 1)][pawn.column] != " " &&
            (board[(pawn.row + 2)][pawn.column] != side ||  board[(pawn.row + 2)][pawn.column] != " ")&& 
            board[(pawn.row + 3)][pawn.column] != " " ){ 
            //Be a wall on rigth side 
            if(board[pawn.row + 1 ][pawn.column - 1 ] == " " ){
                finishMoves.upRigth = pointsOfMoves.upRigth;
            //Be a wall on left side 
            }else if (board[pawn.row + 1 ][pawn.column + 1 ] == " "){
                finishMoves.upLeft = pointsOfMoves.upLeft;
            }
        }

        if(moves == "rigth"){
            finishMoves.rigth = pointsOfMoves.rigth;
        }

        if(moves == "left"){
            finishMoves.left = pointsOfMoves.left;
        }

        if(moves == "down"){
            finishMoves.down = pointsOfMoves.down;
        }

        return finishMoves;
    
    }
    