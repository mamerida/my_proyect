exports.bestPawn =(arrayPawns)=>{
    
    if(!arrayPawns){
        throw new Error("Error need all parameters");
    }

    let pawn =arrayPawns[0];
    arrayPawns.forEach(element => {
        if(pawn.row < element.row){
            pawn= element
        }
    });

    return pawn;
}