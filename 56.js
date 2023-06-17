// <!-- Vary Important Array Methods -->
// **ForEach Method
// **Map Method
// **Filter
// **Reduce
//# We Discussing about ForEach Method
///////////////////////////////////////////////
//Multiply two Numbers in ARRAY
//  const numbers = [2,3,4,5,6,8]

//  function multiplyby2(number, Index){
//     console.log("Index is", Index);
//     console.log(number*2);
// }
// multiplyby2(numbers[0],0);
/////////////////////////////////////////////////
//Another Method to Multiply Two Numbers in Array
// const numbers = [4,5,2,8];

// function multiplyby2(number, index){
//     console.log("index is ", index);
//     console.log(`${number}*2 = ${number*2}`);
// }

// // multiplyby2(numbers[0], 0);
// //Now direct call all number using loop
// for(let i = 0; i< numbers.length; i++){
//     multiplyby2(numbers[i],i);
// }
/////////////////////////////////////////////////
//Method 3 
// const numbers = [4,2,5,8];

// function myfunc(number,index){
//     console.log(`index is ${index} number is ${number}`);
// }
// for(let i = 0; i< numbers.length; i++){
//     myfunc(numbers[i], i);
// }
////////////////////////////////////////////////////
//ForEach Method using to do this method easy without using loop
// const numbers = [4,2,5,8];

// function myfunc(number,index){
//     console.log(`index is ${index} number is ${number}`);
// }
// numbers.forEach(myfunc);
///////////////////////////////////////////////////
//Make Anomous Function to define the Function in ForEach method
// const numbers = [3,4,5,6,7];

// numbers.forEach(function(number, index){
//     console.log(`index is ${index} number is ${number}`)
// });
/////////////////////////////////////////////////////
//multiplybythree by using ForEach Method
// const numbers = [3,6,9,4];

// numbers.forEach(function(number, index){
//     console.log(number*3, index)
// });
/////////////////////////////////////////////////////
//Print ARRAY Using forEach Method

const users = [
    {firstName: "HarshitSir", age:23},
    {firstName: "Satyam", age:18},
    {firstName: "Aman", age: 17},
    {firstName: "Sumit", age: 16},
]
// users.forEach(function(user){
//     console.log(user.firstName);
// });
//Now using for of loop to print user value 
// for(let user of users){
//     console.log(user.firstName);
// }
//Now print using Arrow Function also print Index
users.forEach((users, index) =>{
    console.log(users.firstName, index);
});