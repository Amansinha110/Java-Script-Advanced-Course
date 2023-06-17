//#Lexical scope--- lexical Environment
// function myApp(){
//     const myvar = "value1";

//     function myfun(){
//         const myvar = "value34"
//         console.log("inside myfunc", myvar);
//     }


//     const myfun2 = function(){
//         console.log("HELLO WORLD")
//     }

//     const myfun3 = () => { }

//     console.log(myvar);
//     myfun();
//     myfun2();
// }
// myApp();

//Make New function in fun1 into function2 in lexical scope
function myApp(){
    const myvar = "value1";

    function myfun(){
        // const myvar = "value34"
        const myfun2 =() =>{
            console.log("inside myfunc", myvar);
        }
        myfun2();        
    }

    console.log(myvar);
    myfun();
}
myApp();