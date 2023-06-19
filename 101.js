// Closeure Example:- 2
// how to find cube using function
// function myFunction(power){
//     return function(number){
//         return number ** power
//     }
// }
// const cube = myFunction(3)
// const ans = cube(3)
// console.log(ans);
//////////////////////////
// find square
// const square = myFunction(2)
// const ans = square(8)
// console.log(ans);
//////////////////////////////
// ShortWay to write this Function 
const myFunction = power=> number => number ** power

const square = myFunction(2);
const ans = square(3);
console.log(ans);