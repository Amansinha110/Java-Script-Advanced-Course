//# Reduce Method
//aim: sum of all the numbers in array

// const numbers = [1,2,3,4,5];

// const sum = numbers.reduce((accumulator, currentvalue)=>{
//     return accumulator + currentvalue;
// });
// console.log(sum);
//////////////////////////////////////////////////////////
//Track Value
// accumulator , currentvalue, return
//     1              2           3
//     3              3           6
//     6              4          10
//     10             5          15
//////////////////////////////////////////////////////////
//Realistic example of reduce method 
const usercart = [
    {productid:1, productName: "mobile", Price: 12000},
    {productid:2, productName: "Laptop", Price: 22000},
    {productid:3, productName: "tv", Price: 15000},
]
const totalAmount = usercart.reduce((totalprice, currentproduct)=>{
    return totalprice + currentproduct.Price;
//set initial value is 0
},0)
console.log(totalAmount);

//Track value to understand
// total price,        currentvalue,               return        
//    0              {all product price}           12000
//   12000                 22000                   34000
//   34000                 15000                   49000