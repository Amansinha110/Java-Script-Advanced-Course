// Find Method

// const myArray = ["Hello", "cat", "Dog", "Lion"];

// function isLength3(string){
//     return string.length === 3;
// }
// const ans = myArray.find(isLength3);
// console.log(ans);
///////////////////////////////////////////////
//Define Directly as a Arrow Function
// const myArray = ["Hello", "cat", "Dog", "Lion"];

// const ans = myArray.find((String)=>String.length===3);
// console.log(ans);
////////////////////////////////////////////////
//Get Realistic Example to Find Method
const users = [
    {userId:1, userName: "harshit sir"},
    {userId:2, userName: "Satyam Sinha"},
    {userId:3, userName: "Aman Sinha"},
    {userId:4, userName: "Krishna Sinha"},
    {userId:5, userName: "Sumit Sinha"},
    {userId:6, userName: "Raghav Raj"},
]
const myUser = users.find((user)=>user.userId===3);
console.log(myUser);