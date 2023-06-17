// **Function declaration are hoisted 
//hoisting
//--You cannot host/call before write command in Function Expression and Arrow Function but you call bafore in Function Declaration
//Function Declaration Case 
// ex:- 
// hello()

// function hello(){
//     console.log("hello world");
// }

// hello()
//it works in this case
/////////////////////////////
// In Function Expression Case
//ex:-

hello();

const hello = function(){
    console.log("hello world");
}
// call for print in this case is not work also in arrow function case

