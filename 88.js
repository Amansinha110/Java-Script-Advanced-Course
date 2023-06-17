// Super 
// we discuss more thing about this class
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
// use super to get name , age in parent chain
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed= speed;
    }
    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
}
//object and instance are same meaning
// add speed property in dog class
const toomy = new Dog("toomy", 3,45);
console.log(toomy);
console.log(toomy.run());