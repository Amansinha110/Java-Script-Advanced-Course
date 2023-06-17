//block scope vs Function Scope
// In Block Scope //
// you cannot access/callBack any variable Outside the block in case of let and Const
//let and const are block scope
//ex:-
// {
//     const firstname = "Satyam";
// }
//You cannot call this variable outside the block scope
// console.log(firstname);
//you can call only under the block scope in case of let and const
//ex:-
// {
//     let firstname = "satyam"
//     console.log(firstname);
// }
// more ex:-
// if(true){
//     const firstname = "satyam"
//     // console.log(firstname)
// }
// console.log(firstname)
// In Function Scope 
//you can call outside the block any variable 
//In case of var because var is a function scope
//ex:-
// {
//     var gender = "male";
// }
//     console.log(gender);

// // more ex:-
// if(true){
//     var firstname = "satyam"
//     // console.log(firstname)
// }
// console.log(firstname)
//Some more cases
//--In var Case
// function myApp(){
//     if(true){
//         var firstname= "satyam"
//         console.log(firstname);
//     }

//     if(true){
//         console.log(firstname);
//     }
//     console.log(firstname);
// }
// myApp();
//---In Block scope case
function myApp(){
    if(true){
         let firstname= "satyam"
        console.log(firstname);
    }

    if(true){
        console.log(firstname);
    }
    console.log(firstname);
}
myApp();