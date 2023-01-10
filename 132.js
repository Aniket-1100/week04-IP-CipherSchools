function myfunc(callback){
    console.log("Function is doing task 1");
    callback();
}

function myfunc2(){
    console.log("Function is doing task 2")
}

myfunc(()=> {
    console.log("Function is doing task 2")
});

function getTwoNumbers(number1, number2, callback) {
    if (typeof number1 === "number" && typeof number2 === "number"){
        callback(number1,number2);
    }
    else {
        console.log("Wrong data type");
    }
}

function addTwoNumbers(num1,num2) {
    console.log(num1+num2);
}

getTwoNumbersAndAdd(4, 5, addTwoNumbers);