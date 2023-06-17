// **Short Syntax For Methods
// const user1 = {
//     firstName : "Harshit Sir",
//     age: 9,
//     about: function(){
//         console.log(this.firstName,this.age);
//     }
// }
// user1.about();
//////////////////////////////////////////////
// we don't need to  write function in sort method
const user1 = {
    firstName : "Harshit Sir",
    age: 9,
    about(){
        console.log(this.firstName,this.age);
    }
}
user1.about();
// its work same like function