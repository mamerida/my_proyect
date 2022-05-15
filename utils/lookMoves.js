exports.lookMoves = (position) =>{
    //catch errors 
    if(!position){
        throw new Error("Error. Need a positions");
    }
    if(position.length != 3){
        throw new Error("Error. Wrong input parameters");
    }

    //verify posible moves
    position.forEach(powns => {
        powns.moves = {};
        //verifi moves 
        if(powns.row != 16){
            powns.moves.up = true;
        }

        if(powns.row != 0){
            powns.moves.down = true;
        }

        if(powns.column != 16){
            powns.moves.left = true;
        }

        if(powns.column != 0){
            powns.moves.rigth = true;
        }
    });

    return position;
}