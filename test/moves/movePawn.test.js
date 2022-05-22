const {movePawn} = require('../../moves/movePawn');


describe(" function return a message with panw move to send to server  " , ()=>{

    const message= {
        "event": "your_turn",
        "data": {
            "player_2": "uno",
            "player_1": "dos",
            "score_2": 0.0,
            "walls": 10.0,
            "score_1": 0.0,
            "side": "N",
            "remaining_moves": 50.0,
            "board": "  N     N     N                                                                                                                                                                                                                                                                   S     S     S  ",
            "turn_token": "087920d0-0e6b-4716-9e77-add550a006aa",
            "game_id": "ab16e71c-caeb-11eb-975e-0242c0a80004"
        }
    }

    test("without message", ()=>{
        expect(()=>{movePawn()}).toThrow(new Error("Error need all parameters"))
    })

    test("with wrong coordinates", ()=>{
        expect(()=>{movePawn(message,"a",3,"b",2)}).toThrow(new Error("Error some of the coordinates are not numbers "))
    })
    
    test("without message but yes with numbers", ()=>{
        
    
        const response ="{\"action\":\"move\",\"data\":{\"game_id\":\"ab16e71c-caeb-11eb-975e-0242c0a80004\",\"turn_token\":\"087920d0-0e6b-4716-9e77-add550a006aa\",\"from_row\":0,\"from_col\":0,\"to_row\":1,\"to_col\":1}}"    
        expect(movePawn(message,0,0,1,1)).toStrictEqual(response)
    })


})
