//Parameter Destructuring
//used in //object and also react case

// const person ={
//     firstName: "harshit",
//     gender: "male",
// }
// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }
// printDetails(person);

// More Destructuring
const person ={
    firstName: "harshit",
    gender: "male",
}
function printDetails({firstName,gender,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);
