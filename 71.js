//Method
//Function inside object

// const person = {
//     firstName : "Harshit Sir",
//     age: 9,
//     about: function(){
//         console.log("person name is harshit and person age is 9")
//     }
// }
// console.log(person.about);
// its print all function with value but i want to print only value
// Print function value
// person.about();
/////////////////////////////////////////////////////////////////////
// If we change firstname in person than i want also change value of function
// const person = {
//     firstName : "Rahul",
//     age: 9,
//     about: function(){
//         console.log(`person name is ${this.firstName} and person age is ${this.age} `);
    // }
// }
// person.about();
/////////////////////////////////////////////////////////////////////
function personInfo(){
    console.log(`person name is ${this.firstName} and person age is ${this.age} `);
}
const person1 = {
    firstName: "Harshit Sir",
    age: 9,
    about: personInfo
}
const person2 = {
    firstName: "Satyam Sinha",
    age: 9,
    about: personInfo
}
const person3 = {
    firstName: "Aman sinha",
    age: 9,
    about: personInfo
}
person1.about();
person2.about();
person3.about();