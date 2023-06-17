//Some Method
// some method use to check if any one number is Even/Odd then give output into True/False

//Check any one number is even
// const numbers = [3,5,8,9];

// const ans = numbers.some((number)=>number%2 ===0);
// console.log(ans);
/////////////////////////////////////////////////
//Check any one number is odd
// const numbers = [2,4,8,6,9];

// const ans = numbers.some((number)=>number%2!==0);
// console.log(ans);
//////////////////////////////////////////////////
// Realistic Example
const usercart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 1, productName: "Laptop", price: 22000},
    {productId: 1, productName: "Tv", price: 15000},
    {productId: 1, productName: "Macbook", price: 15000},
]
const ans = usercart.some((cartItem)=>cartItem.price > 100000);
console.log(ans);