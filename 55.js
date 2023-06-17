//Functions returning Functions

// function myFunc(){
//     return "a";
// }
// const ans = myFunc();
// console.log(ans);
////////////////////////////
//return array into function

// function myFunc(){
//     return [1,2,3];
// }
// const ans = myFunc();
// console.log(ans);
//////////////////////////////
// return object 

// function myFunc(){
//     return {name: "Satyam", age: 22};
// }
// const ans = myFunc();
// console.log(ans);
///////////////////////////////
//Now returning Function returning Function

// function myFunc(){
//     function hello(){
//         console.log("hello world")
//     }
//     return hello;
// }
// const ans = myFunc();
// console.log(ans);
// //call function to print 
// ans();
/////////////////////////////////////
//get return into function
// function myFunc(){
//     function hello(){
//         return "hello world"
//     }
//     return hello;
// }
// const ans = myFunc();
// //call function to print 
// console.log(ans());
////////////////////////////////
//Another way for Return function

function myFunc(){
        return function(){
            return "hello world"
        };
}
const ans = myFunc(); 
console.log(ans());