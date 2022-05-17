exports.bestPown =(arrayPawns)=>{
    let pawn =arrayPawns[0];
    arrayPawns.forEach(element => {
        if(pawn.row < element.row){
            pawn= element
        }
    });

    return pawn;
}