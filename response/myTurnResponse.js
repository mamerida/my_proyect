
const {MakeBoard} = require('../board/board');

//  const message2 = {
//     event: 'your_turn',
//     data: {
//       score_2: 0,
//       board: '  N     N     N
//                                                                                       S     S     S  ',
//       score_1: 0,
//       remaining_moves: 200,
//       player_1: 'mamerida2013@gmail.com',
//       player_2: 'mamerida2013@gmail.com',
//       side: 'N',
//       walls: 10,
//       turn_token: 'dddc6c27-8956-4623-908f-1ca3bc5aa6cc',
//       game_id: 'e4a0477c-d13d-11ec-aef0-7ecdf393f9cc'
//     }
//   }

//my turns manages the board, chose the best option and send the response 
exports.myTurn = (message) =>{

    //catch without message 
    if(!message){
        return;
    }

    //makes board from string 
    const board = MakeBoard(message.data.board)

}