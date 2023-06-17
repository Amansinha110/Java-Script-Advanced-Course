//Lexical environment, Scope chain

const LastName = "vashistha";
const printName = function(){
    const firstName = "Harshit";
    console.log(firstName);
    console.log(LastName);
}
printName();
// its Search lastName in his lexical Environment then Give output in console