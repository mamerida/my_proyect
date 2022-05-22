const {viewWallsAndMyPawns} = require('../../utils/viewWallsAndMyPawns');

const finishMovesUp = {up:"up",left:"left" ,rigth:"rigth" ,down:"down"};
const finishMovesLeft = {up:"up",left:"left" ,rigth:"rigth" ,down:"down"};
const finishMovesRigth = {up:"up",left:"left" ,rigth:"rigth" ,down:"down"};
const finishMovesDown = {up:"up",left:"left" ,rigth:"rigth" ,down:"down"};
const sideN ="N";
const firstPawn = {row:0,column:2};
const firstPawnDown = {row:2,column:14};
const firstPawnDownWall = {row:4,column:3};
const move_Up = "up";
const move_left = "left";
const move_rigth = "rigth";
const move_down = "down";
const board_array = [
    [
      ' ', ' ', 'N', ' ', ' ',
      ' ', ' ', ' ', 'N', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', 'N',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', 'S', ' ', ' ',
      ' ', ' ', ' ', 'S', ' ',
      ' ', ' ', ' ', ' ', 'S',
      ' ', ' '
    ]
  ];

  const board_array_with_walls = [
    [
      ' ', '|', 'N', '|', ' ',
      ' ', ' ', ' ', 'N', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', '-', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      '-', '-', '-', '-', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', 'N', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' ', ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', 'S', ' ', ' ',
      ' ', ' ', ' ', 'S', ' ',
      ' ', ' ', ' ', ' ', 'S',
      ' ', ' '
    ]
  ];




describe("view Walls and my Pawns " , ()=>{
    test("without message", ()=>{
        expect(()=>{viewWallsAndMyPawns()}).toThrow(new Error("Error need all parameters"))
    })

    test("test UP move without wall and other piece",()=>{
        //pawn,finishMoves,side,board,move
        expect(viewWallsAndMyPawns(firstPawn,finishMovesUp,sideN,board_array,move_Up)).toStrictEqual({ up: 'up', left: 'left', rigth: 'rigth', down: 'down' });
    })

    test("test LEFT move without wall and other piece",()=>{
        //pawn,finishMoves,side,board,move
        expect(viewWallsAndMyPawns(firstPawn,finishMovesLeft,sideN,board_array,move_left)).toStrictEqual({ up: 'up', left: 'left', rigth: 'rigth', down: 'down' });
    })
    test("test RIGTH move without wall and other piece",()=>{
        //pawn,finishMoves,side,board,move
        expect(viewWallsAndMyPawns(firstPawn,finishMovesRigth,sideN,board_array,move_rigth)).toStrictEqual({ up: 'up', left: 'left', rigth: 'rigth', down: 'down' });
    })
    test("test DOWN move without wall and other piece",()=>{
        //pawn,finishMoves,side,board,move
        expect(viewWallsAndMyPawns(firstPawnDown,finishMovesDown,sideN,board_array,move_down)).toStrictEqual({ up: 'up', left: 'left', rigth: 'rigth', down: 'down' });
    })

    test("test UP move with wall",()=>{
        //pawn,finishMoves,side,board,move
        expect(viewWallsAndMyPawns(firstPawn,finishMovesUp,sideN,board_array_with_walls,move_Up)).toStrictEqual({ left: 'left', rigth: 'rigth', down: 'down' });
    })

    test("test RIGTH move with wall",()=>{
        //pawn,finishMoves,side,board,move
        expect(viewWallsAndMyPawns(firstPawn,finishMovesLeft,sideN,board_array_with_walls,move_rigth)).toStrictEqual({ up: 'up', left: 'left', down: 'down' });
    })

    test("test LEFT move with wall",()=>{
        //pawn,finishMoves,side,board,move
        expect(viewWallsAndMyPawns(firstPawn,finishMovesRigth,sideN,board_array_with_walls,move_left)).toStrictEqual({ up: 'up', rigth: 'rigth', down: 'down' });
    })

    test("test DOWN move with wall and other piece",()=>{
        //pawn,finishMoves,side,board,move
        expect(viewWallsAndMyPawns(firstPawnDownWall,finishMovesDown,sideN,board_array_with_walls,move_down)).toStrictEqual({ up: 'up', left: 'left', rigth: 'rigth'});
    })

  })