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
// how to know key value
// for(let key in user1){
//     console.log(key);
// }
// Another Way
// for(let key in user1){
//     if(user1.hasownproperty(key)){
//         console.log(key);
//     }
// }