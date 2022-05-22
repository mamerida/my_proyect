const {bestPawn} = require('../../utils/selectBestPawn');

describe(" select the pawn closest to the opposite line " , ()=>{

    const powns = [{row:0 ,column:6},{row:4 ,column:6},{row:8 ,column:6}]
    const powsEqualsValues= [{row:2 ,column:4},{row:2 ,column:6},{row:2 ,column:8}]

    test("without message", ()=>{
        expect(()=>{bestPawn()}).toThrow(new Error("Error need all parameters"))
    })

    test("pawn with highter row", ()=>{
        expect(bestPawn(powns)).toStrictEqual({"column": 6, "row": 8});
    })

    test("pawns with equuals row", ()=>{
        expect(bestPawn(powsEqualsValues)).toStrictEqual({row:2 ,column:4});
    })

})