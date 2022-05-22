const {returnCoordinates} = require('../../utils/returnCoordinates');

describe(" return moves to message" , ()=>{

    test("with row 0 column 0 and move up", ()=>{
        //[to_row,to_col]
        expect(returnCoordinates({moves:{up:"up",left:"left",down:"down"}},0,0)).toStrictEqual([1,0]);
    })

    test("with row 0 column 0 and move upJump", ()=>{
        //[to_row,to_col]
        expect(returnCoordinates({moves:{up:"up",upJump:"upJump"}},0,0)).toStrictEqual([2,0]);
    })

    test("with row 4 column 4 and move upLeft", ()=>{
        //[to_row,to_col]
        expect(returnCoordinates({moves:{up:"up",upLeft:"upLeft"}},4,4)).toStrictEqual([5,5]);
    })

    test("with row 4 column 4 and move upRigth", ()=>{
        //[to_row,to_col]
        expect(returnCoordinates({moves:{up:"up",upRigth:"upRigth"}},4,4)).toStrictEqual([5,3]);
    })

    test("with row 4 column 4 and move left", ()=>{
        //[to_row,to_col]
        expect(returnCoordinates({moves:{left:"left"}},4,4)).toStrictEqual([4,5]);
    })

    test("with row 4 column 4 and move rigth", ()=>{
        //[to_row,to_col]
        expect(returnCoordinates({moves:{rigth:"rigth"}},4,4)).toStrictEqual([4,3]);
    })

    test("with row 4 column 4 and move down", ()=>{
        //[to_row,to_col]
        expect(returnCoordinates({moves:{down:"down"}},4,4)).toStrictEqual([3,4]);
    })



})