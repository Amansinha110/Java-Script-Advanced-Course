// # Arrow Function
//# Function Expression
// const singHappyBirthday = function(){
//     console.log("happy birthday to you .....");
// }
// singHappyBirthday();
// # Change into Arrow Function
// const singHappyBirthday = () => {
//     console.log("happy birthday to you ......");
// }
// singHappyBirthday();
//////////////////////////////////////////////////////////////
//# Function Expression
// const sumThreeNumbers = function (number1, number2, number3){
//     return number1 +number2 +number3;
// }
// const ans = sumThreeNumbers(2,4,5);
// console.log(ans);
// # Change into arrow Function
// const sumThreeNumbers = (number1, number2, number3) =>{
//      return number1 +number2 +number3;
// }
// const ans = sumThreeNumbers(2,4,5);
// console.log(ans);
//////////////////////////////////////////////////////////////
//# Function Expression 
// const isEven = function(number){
//     return number % 2 === 0;
// }
// console.log(isEven(2));
//# Change into Arrow Function
// const isEven = (number) =>{
//     return number % 2 === 0;
// }
// console.log(isEven(2));
// # Shortcut to write in One line using ArrowFunction
// const isEven = number => number % 2 === 0;
// console.log(isEven(2));
///////////////////////////////////////////////////////////////
// # Function Expression
// const firstchar=function(anystring){
//     return anystring[0];
// }
// # Change into Arrow Function
// const firstchar=(anystring)=>{
//     return anystring[0];
// }
// # Shortcut to write in One line Using ARROW Function
// const firstchar = anystring => anystring[0];
// console.log(firstchar("harshit"));
//////////////////////////////////////////////////////////////
// # Function Expression
// const findTarget= function(array, target){
//     for (let i =0; i<array.length; i++){
//         if (array[i]===target){
//             return i;
//         }
//     }
//     return -1
// }
// # Change into Arrow Function 
const findTarget= (array, target)=>{
    for (let i =0; i<array.length; i++){
        if (array[i]===target){
            return i;
        }
    }
    return -1
}