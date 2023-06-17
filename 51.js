//defaut parameter
// --set default value of any Number

// function addTwo (a,b){
//     if(typeof b === "undefined"){
//         b = 3;
//     }
//     return a + b;;
// }
// const ans = addTwo(6);
// console.log(ans);

// Now using default parameter
//To set default value of B
function addTwo (a,b=3){
    return a + b;
}
const ans = addTwo(6);
console.log(ans);