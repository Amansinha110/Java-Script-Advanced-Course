//gatter and setters
class person {
    constructor(firstName, LastName, age){
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }
    // make method
    // use get for call fullname as property type
    //gatter
    get fullName(){
        return `${this.firstName} ${this.LastName}`
    }
    // setName(firstName, LastName){
        // this.firstName = firstName;
        // this.LastName = LastName;
    // }
    //setter method
    set fullName(fullName){
        const [firstName, LastName] = fullName.split(" "); // they create this type in console [mohit, sharma]
        this.firstName = firstName;
        this.Lastname = LastName;
    }
}

const person1 = new person("harshit", "sharma",23);
// console.log(person1);
// console.log(person1.fullName());
// console.log(person1.firstName);
// use get for call this type
// console.log(person1.fullName);
// console.log(person1.firstName);
// console.log(person1.LastName);
// change firstname and lastname use setName method
// person1.setName("mohit","vashistha");
// console.log(person1.firstName);
// console.log(person1.LastName);
// Another way to change
// person1.firstName = "mohit";
// person1.LastName = "sharma";
// console.log(person1.firstName);
// console.log(person1.LastName);
////////////////////////////////////////
//Change fullName
// make a new method set fullname for change fullname
// now print
person1.fullName = "mohit vashistha";
console.log(person1);