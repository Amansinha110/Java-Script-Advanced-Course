// const user = {
//     firstName : "Satyam sinha",
//     LastName: "Sinha",
//     email: "satyamsinhaa779@gmail.com",
//     age: 2,
//     adress: "House Number, colony, pincode, state",
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function(){
//         return this.age >= 18; 
//     }
// }
// const aboutuser = user.about();
// console.log(aboutuser);
/////////////////////////////////////////////////////////////////////
// Make a function who get as a name/email and More details
// function create object
//add key value pair
// object ko return krega
function createusers(firstName, LastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.LastName = LastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`
    };
    user.iS18 = function(){
        return this.age >= 18;
    }
    return user;
}
const user1 = createusers('Satyam', 'Sinha', 'satyamsinhaa779@gmail.com', '18', 'Saidpur')
console.log(user1);
const iS18 = user1.iS18();
console.log(iS18);
const about = user1.about();
console.log(about);