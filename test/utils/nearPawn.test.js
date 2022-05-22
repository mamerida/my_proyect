const {nearPawn} = require('../../utils/nearPawn');


describe(" function returns near pown of board" , ()=>{

    test("without message", ()=>{
        expect(()=>{nearPawn()}).toThrow(new Error("Error need all parameters"))
    })


    test(" North near with same rows ", ()=>{
        //nearestPawn,board,other_side
        const panws=[{row:6,column:6},{row:6,column:6},{row:6,column:6}]
        expect(nearPawn(panws,"N")).toStrictEqual({row:6,column:6})
    })

    test(" North near with differents rows ", ()=>{
        //nearestPawn,board,other_side
        const panws=[{row:4,column:6},{row:8,column:6},{row:10,column:6}]
        expect(nearPawn(panws,"N")).toStrictEqual({row:10,column:6})
    })

    test(" South near with same rows  ", ()=>{
        //nearestPawn,board,other_side
        const panws=[{row:4,column:6},{row:4,column:6},{row:4,column:6}]
        expect(nearPawn(panws,"S")).toStrictEqual({row:4,column:6})
    })

    test(" South near with different rows  ", ()=>{
        //nearestPawn,board,other_side
        const panws=[{row:4,column:6},{row:8,column:6},{row:10,column:6}]
        expect(nearPawn(panws,"S")).toStrictEqual({row:4,column:6})
    })


})