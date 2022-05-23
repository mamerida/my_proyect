const {lookMoves} = require('../../logic/lookMoves');


describe(" function returns posible moves per pawn considering pawn position on board " , ()=>{

    test("without message", ()=>{
        expect(()=>{lookMoves()}).toThrow(new Error("Error. Wrong input parameters"))
    })

    test("without down move", ()=>{
        const result =[ {"column": 2, "moves": {"left": "left", "rigth": "rigth", "up": "up"}, "row": 0}, 
                        {"column": 4, "moves": {"left": "left", "rigth": "rigth", "up": "up"}, "row": 0}, 
                        {"column": 5, "moves": {"left": "left", "rigth": "rigth", "up": "up"}, "row": 0}]
        expect(lookMoves([{"column": 2, "row": 0},{"column": 4, "row": 0},{"column": 5, "row": 0}])).toStrictEqual(result)
    })

    test("without rigth move", ()=>{
        const result =[{"column": 0, "moves": {"left": "left", "up": "up"}, "row": 0}]
        expect(lookMoves([{"column": 0, "row": 0}])).toStrictEqual(result);
    })

    test("without left move", ()=>{
        expect(lookMoves([{"column": 16, "row": 0}])).toStrictEqual([{"column": 16, "moves": {"rigth": "rigth", "up": "up"}, "row": 0}]);
    })

    test("with all moves", ()=>{
        expect(lookMoves([{"column": 4, "row": 4}])).toStrictEqual([{"column": 4, "moves": {"down": "down","left": "left","rigth": "rigth", "up": "up"}, "row": 4}]);
    })


})