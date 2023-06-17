//Clone using object.assign

//memory
// clone an object value
// const obj = {
//     key1: "value1",
//     key2: "value2",
// }
// const obj2 = obj;
// console.log(obj);
// console.log(obj2);
///////////////////////////////////
// clone an object value and add more value in old values using spread operator
// const obj = {
//     key1: "value1",
//     key2: "value2",
// }
// const obj2 = {...obj};
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);
//////////////////////////////////////////////
// Another way to clone object using Object Assign
const obj = {
    key1: "value1",
    key2: "value2",
}
const obj2 = Object.assign({}, obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj2);
