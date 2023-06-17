//Iterables
// jispe hum for of loop laga sakte hai
// string , array are iterable
// In String case
// const firstName = "Satyam";
// for(let char of firstName){
//     console.log(char);
// }
///////////////////////////////////////
//In Array Case
// const items = ["item1", "item2", "item3"];
// for(let item of items){
    // console.log(item);
// }
////////////////////////////////////////
//In object Case
// const users = {'key1': 'value1' , 'key2': 'value2'}
// for(let item of users){
    // console.log(item);
// }
// its not work in object case it show error
//////////////////////////////////////////////////////////
// array like object
// jinke pas length property hoti hai
// aur jinko hum index se access kar sakte hai
// example :- string

const firstName = "harshit sir"
console.log(firstName.length);
console.log(firstName[2]);
