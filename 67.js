// Sets ( it is iterable)
//Store data
// sets also have its own methods
// no index-based access
// order is not guaranteed
// unique items only (no duplicates allowed)
// we use set when we have unique value because its not repeated

//Store data in set use array
// const numbers = new Set([1,2,3]);
// console.log(numbers);
/////////////////////////////////////
//Store data in set use string
// const numbers = new Set("abc");
// console.log(numbers);
/////////////////////////////////////
//Make empty set and later add value
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// console.log(numbers);
///////////////////////////////////////
// add duplicate values in set to make new array
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(["item1","item2"]);
// numbers.add(["item1","item2"]);
// console.log(numbers);
///////////////////////////////////////
//Check elements in set
// const numbers = new Set();
// numbers.add(1);
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }
// console.log(numbers);
///////////////////////////////////////
//Use for of loop in set
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(7);

// for(let number of numbers){
//     console.log(number);
// }
//////////////////////////////////////////
//Make unique value in set
// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray);
// console.log(uniqueElements);
///////////////////////////////////////////
//Find length
const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length);