exports.lookMoves = (position) =>{
    //catch errors 
    if(!position){
        throw new Error("Error. Wrong input parameters");
    }

    //verify posible moves
    position.forEach(pawns => {
        pawns.moves = {};
        
        if(  pawns.row != 16){
            pawns.moves.up = "up";
        }

        if(pawns.row != 0){
            pawns.moves.down =  "down";
        }

        if(pawns.column != 16){
            pawns.moves.left = "left";
        }

        if(pawns.column != 0){
            pawns.moves.rigth = "rigth";
        }
    });

    return position;
}