// Rest parameter
//print rest value in c
// function myfunc (a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myfunc(3,4,5,6,7,8,9);

/////////////////////////////////////////
//make a new function
// function addAll(...numbers){
//     console.log(numbers);
//     console.log(Array.isArray(numbers));
// }
// addAll(1,2,3,4,5,6,7,8)
/////////////////////////////////////////
//Now add this number using loop value and also using rest parameter
function addAll(...numbers){
    let total =0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
const ans = addAll(1,2,3,4,5,6,7,8);
console.log(ans);