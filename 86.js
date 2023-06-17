// 2015 /es6
//class keyword
//class are fake

class Createusers{
    constructor(firstName, LastName, email, age, address){
        // console.log("constructor called");
        this.firstName = firstName;
        this.LastName = LastName;
        this.email = email;
        this.age = age;
        this.address = address;  
    }
    about(){
        return `${this.firstName} is ${this.age} years old`
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return 'toona na na na na la la';
    }
    func(a){
        console.log(a);
    }
}
// you cannot call constructor without new keyword

const user1 =new Createusers('Satyam', 'Sinha', 'satyamsinhaa779@gmail.com', '18', 'Saidpur')
const user2 =new Createusers('Aman', 'Sinha', 'satyamsinhaa779@gmail.com', '18', 'Saidpur')
const user3 =new Createusers('Satyam', 'Sinha', 'satyamsinhaa779@gmail.com', '18', 'Saidpur')
console.log(user1.firstName);
console.log(user1.is18());
console.log(user1.sing());
// check prototype
console.log(Object.getPrototypeOf(user1));
// call func
user1.func("harshit sir")