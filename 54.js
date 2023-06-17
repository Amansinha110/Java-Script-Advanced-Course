//Call back Functions

// function myfunc(a){
//     console.log(a);
//     console.log('hello world');
// }
// myfunc([1,2,3]);
////////////////////////////
//Change VALUE of (a)
//you can store in (a) value of string,number,word,integear and Array
// function myfunc(a){
//     console.log(a);
//     console.log('hello world');
// }
// myfunc(["abc"]);
///////////////////////////////
//change (a) value into Function using callback function
// function myfunc2(){
//     console.log("inside my func2")
// }
// function myfunc(callback){
//     callback();
// }
// myfunc(myfunc2);
////////////////////////////////
//More Call BakcFunction
// function myfunc2(){
//     console.log("inside my func2")
// }
// function myfunc(callback){
//     console.log("hello there I am a Func and I can..")
//     callback();
// }
// myfunc(myfunc2);
////////////////////////////////
//Some more Callback Function
function myfunc2(name){
    console.log("inside my func2")
    console.log(`your name is ${name}`);
}
function myfunc(callback){
    console.log("hello there I am a func and I can..")
    callback("harshit");
}
myfunc(myfunc2);