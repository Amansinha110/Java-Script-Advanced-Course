//static methods and properties
class person {
    constructor(firstName, LastName, age){
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }
    // make method who related with class
    static classInfo(){
        return 'this is person class';
    }
    //static property
    static desc = "static property";
    get fullName(){
        return `${this.firstName} ${this.LastName}`
    }
    set fullName(fullName){
        const [firstName, LastName] = fullName.split(" "); 
        this.firstName = firstName;
        this.Lastname = LastName;
    }
    eat(){
        return `${this.firstName} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}
const person1 = new person("harshit","sharma", 8);
// console.log(person1.eat());
// directly class related
// const info = person.classInfo();
// console.log(info);
// Access static property using class
console.log(person.desc);