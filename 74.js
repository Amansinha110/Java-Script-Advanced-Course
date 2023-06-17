// **Some Warnings

const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }
}
// don't do this Mistake
// user1.about();
// const myfunc = function(){
    // console.log(this.firstName, this.age);
// }
// myfunc();
//Its show undefined dont do this work
// right way to do this Method
const myfunc = user1.about.bind(user1);
myfunc();