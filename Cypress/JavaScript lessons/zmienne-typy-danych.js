// Variables and data types:

let x = 4;
let a = "Words";
x = 9;
a = "New words";

console.log(x + ' ' + a);
// 9 New words


const myName = "Adam";
console.log(myName);
// Adam


let y = 102;
let b = "Hello World!";
let c = true;
console.log(typeof(y + ' ' + b + ' ' + c));
// string


const undef = undefined;
const nuull = null;
console.log(undef, nuull);
// undefined null


const board = [3, "Eva", 5, "Adam"];
console.log(board);
// (4)[3, 'Eva', 5, 'Adam']
console.log(board[1]);
// Eva


const days = {
    week: "Tuesday",
    month: "May",
    year: 2023
}
console.log(days);
// {week: 'Tuesday', month: 'May', year: 2023}

days.month = "June"
console.log(days.month);
// June