// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     iS18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toona na na na na la la';
//     }
// }
function createusers(firstName, LastName, email, age, address){
    // make proto chain to empty object
    // proto create bond between two object
    const user = Object.create(createusers.prototype); //{}
    user.firstName = firstName;
    user.LastName = LastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
// console.log(createusers.prototype);
// Add usermethod means function in prototype
createusers.prototype.about = function(){
            return `${this.firstName} is ${this.age} years old`
},
createusers.prototype.is18 = function(){
            return this.age >= 18;
},
createusers.prototype.sing= function(){
            return 'toona na na na na la la';
}

const user1 = createusers('Satyam', 'Sinha', 'satyamsinhaa779@gmail.com', '18', 'Saidpur')
const user2 = createusers('Aman', 'Sinha', 'satyamsinhaa779@gmail.com', '18', 'Saidpur')
const user3 = createusers('Satyam', 'Sinha', 'satyamsinhaa779@gmail.com', '18', 'Saidpur')
console.log(user1);
console.log(user1.is18());