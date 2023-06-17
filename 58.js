// # Filter Method
//Using filter Method to filter even and Odd Number  
// const numbers = [1,3,2,4,5,6,7,,8,12];

// //now use call back function
// const isEven = function(number){
//     return number%2 === 0;
// }
// //Now use filter method to filter this Number
// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);
/////////////////////////////////////////////////////////
//Now filter only odd Numbers
// const numbers = [1,3,2,4,5,6,7,,8,12];

// //now use call back function
// const isOdd = function(number){
//     return number%2!== 0;
// }
// //Now use filter method to filter this Number
// const OddNumbers = numbers.filter(isOdd);
// console.log(OddNumbers);
//////////////////////////////////////////////////////////
//Now directly define Arrow function in filter Method
const numbers = [1,2,3,4,5,6,7,8,9];

const evenNumbers = numbers.filter((number)=>{
    return number%2===0; 
});
console.log(evenNumbers);
