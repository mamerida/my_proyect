const {viewLine} = require('../../utils/viewLine');


describe(" funciton returns if its posibble put a wall in selected line" , ()=>{
    //nearestPawn,board,other_side
    const nearestPawnN= {row:8,column:8};
    const nearestPawnNWithWalls= {row:10,column:8};
    const nearestPawnS= {row:14,column:2};
    const nearestPawnSWithWalls= {row:16,column:8};
    const sideNort = "N";
    const sideSouth = "S";
    const board_arraye = [
        [' ', ' ','N',' ', ' ',  ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ',' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',' ', ' ',' ', ' ', ' ',' ',' ',' ', ' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', 'N', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', 'N', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        ['-', '*', '-', '-', '*','-', '-', '*', '-', '-','*', '-', '-', '*', '-',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', 'S', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        ['-', '*', '-', '-', '*','-', '-', '*', '-', '-','*', '-', '-', '*', '-',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', 'S', ' ',' ', ' ', ' ', ' ', 'S',' ',' ']
      ];


    test("with out message", ()=>{
        expect(()=>{viewLine()}).toThrow(new Error("Error need all parameters"))
    })

    test(" can put a wall North ", ()=>{
        //nearestPawn,board,other_side
        expect(viewLine(nearestPawnN,board_arraye,sideNort)).toBe(true);
    })

    test(" cant put a wall North ", ()=>{
        //nearestPawn,board,other_side
        expect(viewLine(nearestPawnNWithWalls,board_arraye,sideNort)).toBe(false);
    })

    test(" can put a wall south ", ()=>{
        //nearestPawn,board,other_side
        expect(viewLine(nearestPawnS,board_arraye,sideSouth)).toBe(true);
    })

    test(" cant put a wall south ", ()=>{
        //nearestPawn,board,other_side
        expect(viewLine(nearestPawnSWithWalls,board_arraye,sideSouth)).toBe(false);
    })


})