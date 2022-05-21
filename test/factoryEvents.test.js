const {FactoryServerEvent} = require('../factoryEvents');

describe("Response of acceptChallengeResponse " , ()=>{

    test("with out response", ()=>{
        expect(()=>{FactoryServerEvent.acceptChallengeResponse()}).toThrow(new Error("Need message"))
    } )

})

describe("Response of myTurnResponsePawn" , ()=>{

    test("with out response", ()=>{
        expect(()=>{FactoryServerEvent.myTurnResponsePawn()}).toThrow(new Error("Need message"))
    } )

})

describe("Response of myTurnResponseWall " , ()=>{

    test("with out response", ()=>{
        expect(()=>{FactoryServerEvent.myTurnResponseWall()}).toThrow(new Error("Need message"))
    } )

})

describe("Response of userList " , ()=>{
    const message= {
        "event": "list_users",
        "data": {
            "users": ["Player 1", "Player 2"]
        }
    };

    test("with out response", ()=>{
        expect(()=>{FactoryServerEvent.userList()}).toThrow(new Error("Need message"))
    } )

    test("with message", ()=>{
        expect(FactoryServerEvent.userList(message)).toBe(console.log(message))
    } )

})

describe("Response of gameOver " , ()=>{
    
    test("with out response", ()=>{
        expect(()=>{FactoryServerEvent.gameOver()}).toThrow(new Error("Need message"))
    } )

})
