//Splice method
//Start , delete , insert
// use to delete between and array and insert
// delete between array
const myArray = ["item1", "item2", "item3"];

//delete
// myArray.splice(1,1);

// get return deleted item
// const deletedItem = myArray.splice(1,1);
// console.log("deleted item", deletedItem);

//delete two items
// const deletedItem = myArray.splice(1,2);
// console.log("deleted item", deletedItem);

//insert
// myArray.splice(1,0, 'items')
// console.log(myArray);

//////////////////////////////////////////////
// Do both work insert and delete
// myArray.splice(1,2, "item4", "item5");
// console.log(myArray);
/////////////////////////////////////////////
// check deleted item as well
const deletedItem =myArray.splice(1,2, "item4", "item5");
console.log(" deleted item is", deletedItem);
console.log(myArray);