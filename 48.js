//Function inside function
//--Make function inside Function
function app(){
    const myfunc =() =>{
        console.log("hello in myfunction...")
    }

    const addTwoNumber =(num1,num2) =>{
        return num1 + num2;
    }
    const mul = (num1, num2) => num1 * num2;
    //call all function
    console.log("inside app");
    myfunc();
    console.log(addTwoNumber(5,8))
    console.log(mul(3,6))
}
app()
