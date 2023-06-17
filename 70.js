// Optional chaining

const user = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}

}
console.log(user.firstName);
console.log(user?.address?.houseNumber);
//its show undefined not error using (?) 
// it means its does not exist this time but later its exist so we use (?)
// (?) its check this value exist or not if not they give output undefined
