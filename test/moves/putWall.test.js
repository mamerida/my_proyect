
const {putWall} = require('../../moves/putWall');

describe(" function return a message with wall direction to send to server " , ()=>{

    test("without message", ()=>{
        expect(()=>{putWall()}).toThrow(new Error("Error need all parameters"))
    })

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


    test("without wrong cordinates", ()=>{
        expect(()=>{putWall(message,"a",1,"v")}).toThrow(new Error("Error some of the coordinates are not numbers"));
    })

    test("without wrong direction", ()=>{
        expect(()=>{putWall(message,1,1,"y")}).toThrow(new Error("Error wrong direction"));
    })

    const response ="{\"action\":\"wall\",\"data\":{\"game_id\":\"ab16e71c-caeb-11eb-975e-0242c0a80004\",\"turn_token\":\"087920d0-0e6b-4716-9e77-add550a006aa\",\"row\":1,\"col\":1,\"orientation\":\"h\"}}";
    test("without wrong direction", ()=>{
        expect(putWall(message,1,1,"h")).toStrictEqual(response);
    })

})