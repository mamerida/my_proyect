const {viewOtherPieces} = require('../../utils/viewOtherPieces');

describe(" funciton returns final moves after see special move likes jump and jump with walls " , ()=>{
    const firstPawn = {row:2,column:14};
    const finishMovesUp = {};
    const finishMovesUpRigth = {};
    const finishMovesUpLeft = {};
    const finishMovesLeft = {};
    const finishMovesRigth = {};
    const finishMovesDown= {};
    const movesUp ="up";
    const movesLeft ="left";
    const movesRigth ="rigth";
    const movesDown ="down"; 
    const side ="N";

    //jumpEnemyPawn
    const firstPawnJump= {row:2,column:14};

    //test diagonal jump Rigth
    const firstPawnDiagonalRigth = {row:6,column:7};

    //test diagonal jump Left
    const firstPawnDiagonalLeft = {row:10,column:7};

    const board_array_withOut_Walls = [
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
    const board_array_with_Walls = [
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', 'N',' ', ' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', 'S',' ', ' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', 'N', '|', ' ',' ', ' ', ' ', ' ', ' ',' ', ' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', '*', ' ',' ', ' ', ' ', ' ', ' ',' ', ' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', 'S', '|', ' ',' ', ' ', ' ', ' ', ' ',' ', ' '],
        [' ', ' ', ' ', ' ', ' ','-', '*', '-', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' '],
        [' ', ' ', ' ', ' ', ' ',' ', '|', 'N', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' '],
        [' ', ' ', ' ', ' ', ' ',' ', '*', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' '],
        [' ', ' ', ' ', ' ', ' ',' ', '|', 'S', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' '],
        [' ', ' ', ' ', ' ', ' ','-', '*', '-', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ']
    ];


    test("with out message", ()=>{
        expect(()=>{viewOtherPieces()}).toThrow(new Error("Error need all parameters"))
    })

    //finishMoves,side,board,moves,pawn

    test(" can move up ", ()=>{
        expect(viewOtherPieces(finishMovesUp,side,board_array_withOut_Walls,movesUp,firstPawn)).toStrictEqual({up:"up"})
    })

    test("can move Down ", ()=>{
        expect(viewOtherPieces(finishMovesDown,side,board_array_withOut_Walls,movesDown,firstPawn)).toStrictEqual({down:"down"})
    })


    test("can move left ", ()=>{
        expect(viewOtherPieces(finishMovesLeft,side,board_array_withOut_Walls,movesLeft,firstPawn)).toStrictEqual({left:"left"})
    })

    test("can move rigth ", ()=>{
        expect(viewOtherPieces(finishMovesRigth,side,board_array_withOut_Walls,movesRigth,firstPawn)).toStrictEqual({rigth:"rigth"})
    })

    test("can jump enemy ", ()=>{
        expect(viewOtherPieces(finishMovesUp,side,board_array_with_Walls,movesUp,firstPawnJump)).toStrictEqual({up: "up",upJump: "upJump"})
    })

    test("can jump enemy  to diagonal rigth ", ()=>{
        expect(viewOtherPieces(finishMovesUpRigth,side,board_array_with_Walls,movesUp,firstPawnDiagonalRigth)).toStrictEqual({up: "up", upRigth: "upRigth"})
    })

    test("can jump enemy to  diagonal left ", ()=>{
        expect(viewOtherPieces(finishMovesUpLeft,side,board_array_with_Walls,movesUp,firstPawnDiagonalLeft)).toStrictEqual({up: "up",upLeft: "upLeft"})
    })

})