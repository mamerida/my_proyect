const {viewEdge} = require('../../utils/viewEnge');

const finalMoveRigth = {up:"up",left:"left",rigth:"rigth",down:"down"};
const finalMoveLeft = {up:"up",left:"left",rigth:"rigth",down:"down"};
const finishMovesUp = {up:"up",left:"left",rigth:"rigth" ,down:"down"};
const finishMovesCanMoveUp = {up:"up",left:"left",rigth:"rigth" ,down:"down"};
const pawnRigth ={row:8,column:2};
const pawnLeft ={row:6,column:14};
const pawnUp ={row:14,column:8};
const pawnCanUp ={row:8,column:8};
const board_array = [
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', 'N',' ','S'],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
    ['S', ' ', 'N', ' ', ' ',' ', ' ', ' ', 'N', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', 'N', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
    [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', 'S', ' ',' ', ' ', ' ', ' ', ' ',' ',' ']
  ];


describe(" remove moves from pawns at the edge of the board" , ()=>{

    test("with out message", ()=>{
        expect(()=>{viewEdge()}).toThrow(new Error("Error need all parameters"))
    })
    //pawn,finishMoves,board,move
    test("pawn cant move to rigth", ()=>{
        expect(viewEdge(pawnRigth,finalMoveRigth,board_array,"rigth")).toStrictEqual({ up: 'up', left: 'left', down: 'down' });
    })

    test("pawn cant move to left", ()=>{
        expect(viewEdge(pawnLeft,finalMoveLeft,board_array,"left")).toStrictEqual({up:"up",rigth:"rigth",down:"down"});
    })

    test("pawn cant move to up", ()=>{
        expect(viewEdge(pawnUp,finishMovesUp,board_array,"up")).toStrictEqual({left: 'left',rigth:"rigth",down:"down"});
    })

    test("pawn can move to up", ()=>{
        expect(viewEdge(pawnCanUp,finishMovesCanMoveUp,board_array,"up")).toStrictEqual({up:"up",left: 'left',rigth:"rigth",down:"down"});
    })


})