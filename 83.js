// New Keywords
// function createuser(firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// }
// createuser.prototype.about = function(){
    // console.log(this.firstName, this.age);
// }
// const user1 = new createuser("harshit", 9);
// console.log(user1);
// new keyword do this work
//1> empty object
//2> return this
//3> object.create(createuser.prototype); new create chain itself
//4> set value of proto equal to prototype
// user1.about();
/////////////////////////////////////////////////////////////
//New Keyword
//1> this = {}
//2> return {}
//3> they relate proto and prototype itself

// __proto__ equal //official ecmascript document [[prototype]]

// constructor function
function Createusers(firstName, LastName, email, age, address){
    this.firstName = firstName;
    this.LastName = LastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
// console.log(createusers.prototype);
// Add usermethod means function in prototype
Createusers.prototype.about = function(){
            return `${this.firstName} is ${this.age} years old`
},
Createusers.prototype.is18 = function(){
            return this.age >= 18;
},
Createusers.prototype.sing= function(){
            return 'toona na na na na la la';
}

const user1 =new Createusers('Satyam', 'Sinha', 'satyamsinhaa779@gmail.com', '18', 'Saidpur')
const user2 =new Createusers('Aman', 'Sinha', 'satyamsinhaa779@gmail.com', '18', 'Saidpur')
const user3 =new Createusers('Satyam', 'Sinha', 'satyamsinhaa779@gmail.com', '18', 'Saidpur')
console.log(user1);
console.log(user1.is18()); 
