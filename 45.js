//# Function Declaration and Function Expression
//Function Declaration
// function singHappyBirthday(){
//     console.log("happy birthday to you .....");
// }
// singHappyBirthday();
//# change into function Expression
// const singHappyBirthday = function(){
//     console.log("happy birthday to you .....");
// }
// singHappyBirthday();
//////////////////////////////////////////////////////////////
//# Function Declaration
// function sumThreeNumbers(number1, number2, number3){
//     return number1 +number2 +number3;
// }
//#Change into function Expression
// const sumThreeNumbers = function (number1, number2, number3){
//     return number1 +number2 +number3;
// }
// const ans = sumThreeNumbers(2,4,5);
// console.log(ans);
//////////////////////////////////////////////////////////////
//# Function Declaration
// function isEven(number){
//     return number % 2 === 0;
// }
//#change in function Expression
// const isEven = function(number){
//     return number % 2 === 0;
// }
// console.log(isEven(2));
//////////////////////////////////////////////////////////////
//#Function Declaration
// function firstchar(anystring){
//     return anystring[0];
// }
// change into Function Expression
// const firstchar=function(anystring){
//     return anystring[0];
// }
//////////////////////////////////////////////////////////////
//#function Declaration
// function findTarget(array, target){
//     for (let i =0; i<array.length; i++){
//         if (array[i]===target){
//             return i;
//         }
//     }
//     return -1
// }
//# Change in function Expression
const findTarget= function(array, target){
    for (let i =0; i<array.length; i++){
        if (array[i]===target){
            return i;
        }
    }
    return -1
}