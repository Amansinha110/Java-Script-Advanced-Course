// make a array using new keyword function method
// in javascript new keyword in array create internally
// let numbers = new Array(1,2,3);
// let numbers = [1,2,3];
// know prototype
// console.log(Array.prototype);
// Another way 
// console.log(Object.getPrototypeOf(numbers));
// its give in array
// console.log(numbers);
// check is it Array
// console.log(Array.isArray(Array.prototype));

function hello(){
    console.log("hello");
}
//prototype
console.log(hello.prototype);
// its give in object
// change prototype in empty Array
hello.prototype = [];
console.log(hello.prototype);
// push in prototype
hello.prototype.push('1');
console.log(hello.prototype);