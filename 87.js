// practice of class

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}
// use new keyword for call
// const animal1 = new Animal("tom",'2');
// console.log(animal1)
// print methods
// console.log(animal1.eat());
// console.log(animal1.isCute());

// Make Dog class
class Dog{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}
// const toomy = new Dog("toomy", 3);
// console.log(toomy);
// console.log(toomy.eat());

// Make New classes using animal class to borow
class Cat extends Animal{

}
const toomy = new Cat("toomy", 3);
console.log(toomy);