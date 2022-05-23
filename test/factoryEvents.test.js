const {FactoryServerEvent} = require('../factoryEvents');

describe("Response of acceptChallengeResponse " , ()=>{

    test("without response", ()=>{
        expect(()=>{FactoryServerEvent.acceptChallengeResponse()}).toThrow(new Error("Need message"))
    } )

})

describe("Response of myTurnResponsePawn" , ()=>{

    test("without response", ()=>{
        expect(()=>{FactoryServerEvent.myTurnResponsePawn()}).toThrow(new Error("Need message"))
    } )

})

describe("Response of myTurnResponseWall " , ()=>{

    test("without response", ()=>{
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

    test("without response", ()=>{
        expect(()=>{FactoryServerEvent.userList()}).toThrow(new Error("Need message"))
    } )

    test("with message", ()=>{
        expect(FactoryServerEvent.userList(message)).toBe(console.log(message))
    } )

})

describe("Response of gameOver " , ()=>{   
    test("without response", ()=>{
        expect(()=>{FactoryServerEvent.gameOver()}).toThrow(new Error("Need message"))
    } )

})
