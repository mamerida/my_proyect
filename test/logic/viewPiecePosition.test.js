const {viewPawns} = require('../../logic/viewPiecePosition');

describe(" function returns row and column of my pawns in board " , ()=>{


    test("without message", ()=>{
        expect(()=>{viewPawns()}).toThrow(new Error("Error wrong parameters"))
    })

    const message= {
        "event": "your_turn",
        "data": {
            player_2: "uno",
            player_1: "dos",
            score_2: 0.0,
            walls: 10.0,
            score_1: 0.0,
            side: "N",
            remaining_moves: 50.0,
            board: "  N     N     N                                                                                                                                                                                                                                                                   S     S     S  ",
            turn_token: "087920d0-0e6b-4716-9e77-add550a006aa",
            game_id: "ab16e71c-caeb-11eb-975e-0242c0a80004"
        }
    }
    const board_array = [
        [' ', ' ', 'N', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', 'S',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', 'N', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', 'S', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ',' '],
        [' ', ' ', 'S', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', 'N', ' ', ' ',' ',' ']
      ];

    test("with North Side", ()=>{
    expect(viewPawns(board_array,message)).toStrictEqual([{"column": 2, "row": 0}, {"column": 8, "row": 2}, {"column": 12, "row": 16}])
    })

    const message_2= {
        "event": "your_turn",
        "data": {
            player_2: "uno",
            player_1: "dos",
            score_2: 0.0,
            walls: 10.0,
            score_1: 0.0,
            side: "S",
            remaining_moves: 50.0,
            board: "  N     N     N                                                                                                                                                                                                                                                                   S     S     S  ",
            turn_token: "087920d0-0e6b-4716-9e77-add550a006aa",
            game_id: "ab16e71c-caeb-11eb-975e-0242c0a80004"
        }
    }

    test("with South Side", ()=>{
        expect(viewPawns(board_array,message_2)).toStrictEqual([{"column": 14, "row": 0}, {"column": 8, "row": 14}, {"column": 2, "row": 16}])
        })


})