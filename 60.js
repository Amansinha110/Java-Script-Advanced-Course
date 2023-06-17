// Sort method 
//sort method change array
//sort method change any number into string value and then give output javascript
//char : ascii value follow
//ASCII TABLE

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64

// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90


// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '/' : 124
// '}' : 125
 

////////////////////////////////////
//Arrange Number using sort Method
//5,9,1200,400,3000
//5,9,400,1200,3000 (expected)

// const numbers = [5,9,1200,400,3000]
//sort method change any number into string value and then give output in javascript
//["5","9","1200","400","3000"]
//[53, 57, 49, 52, 51]

// numbers.sort();
// console.log(numbers);
///////////////////////////////////////////////

//Now sort usernames using SortMethod
//Arrange with respect ascii value in java-script
// const userNames = ['harshit', 'Satyam', 'Aman', 'Sumit'];
// userNames.sort();
// console.log(userNames);
//////////////////////////////////////////////
//How to get excepted value in sort method using callback Arrow function
//Sort in asscending order 
// const numbers = [5,9,1200,410,3000];
// numbers.sort((a,b)=>{
//     return a-b;
// });
// console.log(numbers);
//they give expected value
//////////////////////////////////////////////
//Sort way to use this Method
//Sort in asscending order 
// const numbers = [5,9,1200,410,3000];

// numbers.sort((a,b)=>a-b);
// console.log(numbers);

//How its works in Positive case
// get ex:-
//1200,410
//a-b ----> 790
//a-b ----> positive (greater than 0)  -----> b, a
//410 , 1200

//How its works in Negative Case
//a-b ----> negative ----> a,b
//5, 9 -----> -4
/////////////////////////////////////////////////////////
//How to get excepted value in sort method using callback Arrow function
//Sort in desscending order 
// const numbers = [5,9,1200,410,3000];
// numbers.sort((a,b)=>{
//     return b-a;
// });
// console.log(numbers);
//they give expected value

//Realistic ex:-
const products = [
    {productId:1, productName: "p1", price: 300},
    {productId:2, productName: "p1", price: 3000},
    {productId:3, productName: "p1", price: 2200},
    {productId:4, productName: "p1", price: 3330},
    {productId:5, productName: "p1", price: 5000},
    {productId:6, productName: "p1", price: 890},
    {productId:7, productName: "p1", price: 500},
]
// //LowtoHigh sort 
// const LowtoHigh = products.slice(0).sort((a,b)=>{
//     return a.price-b.price
// });
// console.log(products);
// console.log(LowtoHigh);
/////////////////////////////////////////////////////
// HightoLow
const HightoLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price
});
console.log(products);
console.log(HightoLow);