// **This inside arrow Functions
// Arrow function ka this nhi hota hai wo this apne surrounding se leta hai
// Arrow function ka this window hoga you change this in arrow function

const user1 = {
    firstName : "Harshit sir",
    age: 9,
    about: () =>{
        console.log(this.firstName, this.age);
    }
}
user1.about(user1);