// **Call, apply and bind Method
// ex:-
// function hello(){
//     console.log("hello world");
// }
// // we can use callback function for print
// hello.call();
/////////////////////////////////////////////
//More Ex:-
// const user1 = {
//     firstName : "Harshit Sir",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age)
//     }
// }
// user1.about();
////////////////////////////////////////////
// borrow about function from user1
// const user1 = {
//     firstName : "Harshit Sir",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age)
//     }
// }
// const user2 = {
//     firstName : "Mohit",
//     age: 9,
// }
// user1.about.call(user2);
// print without write value
// user1.about.call();
////////////////////////////////////////////////////
//Now we add value and print
function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "Harshit Sir",
    age: 8,
}
const user2 = {
    firstName : "Mohit",
    age: 9,
}
// about.call(user2,"guitar","moazrt");
// about.call(user1,"guitar","moazrt");
////////////////////////////////////////
//apply ---> use to pass array
// about.apply(user2, ["guitar", "bach"])
/////////////////////////////////////////
// bind -----> return function
const func = about.bind(user1,"guitar","moazrt");
func();
