// This keyword, Window object
// console.log(window);
// console.log(this);
// this ==== window

//make function
// function myfunc(){
//     console.log(this)
// }
// myfunc();
// its open window so we use strict  mode
function myfunc(){
    "use strict"
    console.log(this);
}
myfunc();
// its show undefined