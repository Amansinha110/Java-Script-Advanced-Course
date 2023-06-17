// Evary Method
//Every method check every number then give output in true and False
// callack function -----> true/False (boolean)
// every method ------> true / False (boolean)
//# Check all Numbers are Even
// const numbers = [2,4,6,8,10];

// const ans = numbers.every((number)=>number%2===0);
// console.log(ans);
//////////////////////////////////////////////////
//Make a function then Applied every method to check True and False
// const numbers = [2,4,6,8,10,];

// function isEven(number){
//     return number % 2=== 0;
// }
// const ans = numbers.every(isEven)
// console.log(ans);
////////////////////////////////////////////////////////
//Check every product price is less than 30000 rs using Every Method
const usercart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 1, productName: "Laptop", price: 22000},
    {productId: 1, productName: "Tv", price: 15000},
]
const ans = usercart.every((cartitems)=>cartitems.price < 30000);
console.log(ans);
