// revised 
function hello(){
    console.log("hello world");
}

// javaScript function ===> function + object
// how to know function Name
// console.log(hello.name);

// you can add your own properties
// hello.myownproperty = "vary unique value";
// console.log(hello.myownproperty);

// name property ---> tells function name;

//function provides more usefull properties.

// function give free space means empty object {} called prototype
// console.log(hello.prototype); //{}
// prototype property only functions provide
// ex :-
// function hello(){
//     console.log("hello world");
// }
// prototype present in function only
// if(hello.prototype){
//     console.log("prototype is present");
// }else{
//     console.log("prototype is not present");
// }
////////////////////////////////////////////////
// without function
// in array
// const hello =["value1"]
// if(hello.prototype){
//     console.log("prototype is present");
// }else{
//     console.log("prototype is not present");
// }
// it show prototype is not present
/////////////////////////////////////////////////////
// add property in prototype ---> means add key value pair in prototype
hello.prototype.abc="abc";
hello.prototype.xyz ="xyz";
// ADD function
hello.prototype.sing = function(){
    return "Aman";
}
console.log(hello.prototype.sing());