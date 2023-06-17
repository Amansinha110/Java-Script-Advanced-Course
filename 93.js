// hoisting
// you can host before writing variables
console.log(this);
console.log(window);
console.log(myFunction);
myFunction();
console.log(fullName);

function myFunction(){
    console.log("this is my favurite function");
}

var firstName = "Harshit";
var lastName = "Sharma";
var fullName  = firstName + " " + lastName;
console.log(fullName);