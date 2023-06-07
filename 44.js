//# Function in JavaScript and Function Declaration
//--Function works under our command like a maid

// Print Happy Birthday using function 

// function SingHappyBithday(){
    // console.log("happy birthday to you.....")
// }
// order function to print happry birthday to write command
// SingHappyBithday();
///////////////////////////////////////////////////////////////
//# Make Function to add Two Number
// function twoplusfour(){
    // console.log(2+4)
// }
// Now call Function to print
// twoplusfour();
//////////////////////////////////////////////////////////////
//#How to get return value from Function 
// function twoplusfourreturn(){
    // return 2+4;
// }
//call back your function to return value
// console.log(twoplusfourreturn());
//////////////////////////////////////////////////////////////
//# stored return value in another variable
// function twoplusfourreturn(){
//     return 2+4;
// }
// now store this value in another varaible to write command
// const returnedvalue = twoplusfourreturn();
// console.log(returnedvalue);
///////////////////////////////////////////////////////////////
//#How to make Function Reuseable 
// function sumTwoNumbers1(number1, number2){
//     return number1 + number2;
// }
// const return1 = sumTwoNumbers1(9,7);
// console.log(return1);
////////////////////////////////////////////////////////////////
// How to print Not a Number/Undefined
// function sumTwoNumbers1(number1, number2){
//     return number1 + number2;
// }
// const return1 = sumTwoNumbers1();
// console.log(return1);
// console.log(undefined+undefined);
////////////////////////////////////////////////////////////////
// //#How to print three Numbers in Function
// function sumThreeNumbers1(number1, number2, number3){
//     return number1 + number2 + number3;
// }
// const return1 = sumThreeNumbers1(9,7,8);
// console.log(return1);
////////////////////////////////////////////////////////////////
//#Make a function to get output true and False they check number Odd or Even
//conditions-- is Even
//input : 1 Number
//get output -- true, False
//--2 se divide hoke agar remainder 0 aa gya to even number hai
// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(2))
/////////////////////////////////////////////////////////////////
//# Another way to check the number is true and False
// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     return false;
// }
// console.log(isEven(8))
/////////////////////////////////////////////////////////////////
//#Shortcut to check true and False Value
// function isEven(number){
//     return number % 2 === 0;
// }
// console.log(isEven(2))
////////////////////////////////////////////////////////////////
//# How to make a Function who get input in string and give output firstcharacter
// function firstchar(anystring){
//     return anystring [0];
// }
// console.log(firstchar("abc"))
////////////////////////////////////////////////////////////////
//#How to Make a Function who get input in array and target (number) and give output is -- index of target present in array
function findTarget(array, target){
    for(let i=0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,8,59]
const ans = findTarget(myArray, 6);
console.log(ans);