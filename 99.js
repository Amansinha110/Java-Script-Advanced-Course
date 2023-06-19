//closures
//closures : 30-40%
//analysec: 70-80%
//real example : 100%

// function can return function

// function outerfuction(){
//     function innerfunction(){
//         console.log("hello world")
//     }
//     return innerfunction;
// }
// const ans = outerfuction();
// // console.log(ans);
// ans();
// function can return function
///////////////////////////////////////////

function printFullName(firstName, LastName){
    function printName(){
        console.log(firstName, LastName);
    }
    return printName;
}
const ans = printFullName("Harshit", "Sharma");
// console.log(ans);
ans();