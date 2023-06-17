// Make a function who get as a name/email and More details
// function create object
//add key value pair
// object ko return krega
// make a method who work for all users not create new one
// solve problem of create new method for all user 
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`
    },
    iS18 : function(){
        return this.age >= 18;
    }
}
function createusers(firstName, LastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.LastName = LastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.iS18 = userMethods.iS18;
    return user;
}
const user1 = createusers('Satyam', 'Sinha', 'satyamsinhaa779@gmail.com', '18', 'Saidpur')
const user2 = createusers('Aman', 'Sinha', 'satyamsinhaa779@gmail.com', '18', 'Saidpur')
const user3 = createusers('Satyam', 'Sinha', 'satyamsinhaa779@gmail.com', '18', 'Saidpur')
console.log(user1.about());
console.log(user3.about());