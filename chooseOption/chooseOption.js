

const {viewColumns} = require("../utils/viewColumns");

exports.chooseOption = (message,board) =>{

    if(!message){
        return " Error. Need a message";
    }

    if(!board){
        return "Error. Need a board";
    }

    if(message.data.remaining_moves == 0){
        return "Error. No moves left"
    }

    const sides = {north:"N", south:"S"};

    const my_side = message.data.side;
   
    const other_side =  Object.values(sides).filter( cardinal => cardinal != my_side)[0];


   let = {select_row :"" , select_colunm :"" }


}