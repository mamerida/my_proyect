const {acceptChallenge} = require("../response/challengerResponse");



//test about challengerResponse function
describe("Accept Challenge" , ()=>{
    
    const message= {
        event: 'challenge',
        data: {
          opponent: 'mamerida2013@gmail.com',
          challenge_id: '15e0aeb5-5cd2-4688-add0-958a738c6454'
        }
      }
      
    test("accept challenger with correct message" , ()=>{
        expect(acceptChallenge(message)).toBe(
            JSON.stringify(
                {
                    action:"accept_challenge",
                    data:{
                        challenge_id:"15e0aeb5-5cd2-4688-add0-958a738c6454"
                    }
                })
            )
    })

    test("reject challenger without message" , ()=>{
        expect(()=>{acceptChallenge()}).toThrow(new Error("Need message"))
    })

})