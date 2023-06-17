// create a Normal object and print value
// const obj1 ={
//     key1: "value1",
//     key2: "value2"
// }
// const obj2 = {
//     key3: "value3"
// }
// console.log(obj2.key1)
// its show undefined
// Make a object who search surrounding values and print
// Create a empty object and later add values
// const obj1 ={
//     key1: "value1",
//     key2: "value2"
// }
// const obj2 = {}
// obj2.key3 = 'value3' 
// console.log(obj2.key3);
/////////////////////////////////////////
// there is one more way to create empty object
const obj1 ={
    key1: "value1",
    key2: "value2"
}
const obj2 =Object.create(obj1);
// console.log(obj2);
// its return {}
// Now add value in empty object
// Make a object who search surrounding values and print
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2.key2);
// this is happening
console.log(obj2);
///////////////////////////////////////////////////////////////////////
// __proto__ 

//official ecmascript documentation

//[[prototype]]

// __proto__ = [[prototype]] ---> same

 // different ----> prototype
 ////////////////////////////////////////////////////
 
 // get value from obj1 
 console.log(obj2.__proto__);