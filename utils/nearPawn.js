exports.nearPawn= (position,side) =>{

    //catch Errors 
    if(!position){
        throw new Error("Error need a position");
    }
    if(!side){
        throw new Error("Error need a side");
    }

    let nearPown = position[0]
    //verify if my opponet have S i will put a wall front of  pawn with smaller row
    position.forEach(pawn => {
        if( side == "S" &&( nearPown.column == 0 || nearPown.row == 16 || nearPown.row > pawn.row)){
            nearPown = pawn;
        }else if(side == "N" && (nearPown.column == 0 || nearPown.row  == 0 || nearPown.row < pawn.row)){
                nearPown = pawn;
        }
    });

    // if(side == "S"){
    //     position.forEach(pawn => {
    //         if( nearPown.column == 0 || nearPown.row == 16 || nearPown.row > pawn.row){
    //             nearPown = pawn;
    //         }
    //     });
    // }

    // if(side == "N"){
    //     position.forEach(pawn => {
    //         if(nearPown.column == 0 || nearPown.row  == 0 || nearPown.row < pawn.row){
    //             nearPown = pawn;
    //         }
    //     });
    // }


    return nearPown;

}