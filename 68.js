//Maps in object
//map is an iterable

//store data in ordered fashion

//store key value pair (Like object )
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as key
// Like array, number, string
//////////////////////////////////////////////
//object literals
// key ----> string
// key ----> symbol
// const person = {
    // firstName : "Harshit sir",
    // age: 7,
    // 1: "one"
// }
// console.log(person.firstName)
// console.log(person['firstName'])
// console.log(person['1']);
// for(let key in person){
    // console.log(typeof key)
// }
//////////////////////////////////////////////
//Map store key value pair
//you can write any type of key in Map (it is iterables)
// const person = new Map();
// person.set('firstName', 'Harshit');
// person.set('age', 7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1: 'one'}, 'onetwothree');
// console.log(person);
// Access key Value pairs in maps
// console.log(person.get("age"));
// Print all keys
// console.log(person.keys());
// Print all Keys using for of Loop
// for(let key of person.keys()){
    // console.log(key, typeof key);
// }
//we can apply for of loop in map because it is iterables
// for(let [key, value] of person){
    //console.log(Array.isArray(key));
    // console.log(key, value);
// }
//////////////////////////////////////////////////////////
//Make a new array in map and direct add key value pair
// const person = new Map([['firstName', 'Harshit sir'],['age', 23]])
// console.log(person);
/////////////////////////////////////////////////////////////
//Make a object and add value using map in object
const person1 = {
    id: 1,
    firstName: "harshit"
}
const person2 = {
    id: 2,
    firstName: "harshit"
}
const extraInfo = new Map();
extraInfo.set(person1, {age: 23, gender: "male"});
extraInfo.set(person2, {age: 24, gender: "male"});
// console.log(extraInfo);
// Get specific values
console.log(person1.id);
console.log(person2.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);

