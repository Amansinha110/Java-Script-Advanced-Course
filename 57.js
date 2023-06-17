//# Map Method
//-- It is important for React
// const numbers = [3,4,6,7,8,3];

// const square = function(number){
//     return number * number;
// }
// const squareNumber = numbers.map(square);
// console.log(squareNumber);
// Map always return value
//Now make function inside the map Method
// const squareNumber = numbers.map(function(number){
//     return number * number;
// });
// console.log(squareNumber);
// Now using ARROW Method to print/callback
// const squareNumber = numbers.map((number)=>{
//     return number * number;
// });
// console.log(squareNumber);
//How to print Number,string with Index
// const squareNumber = numbers.map((number,index)=>{
//     return ` index: ${index}, ${number*number}`;
// });
// console.log(squareNumber);
/////////////////////////////////////////////////
const users = [
    {firstName: "HarshitSir", age:23},
    {firstName: "Satyam", age:18},
    {firstName: "Aman", age: 17},
    {firstName: "Sumit", age: 16},
]
const userNames = users.map((user)=>{
     return user.firstName;
});
console.log(userNames);