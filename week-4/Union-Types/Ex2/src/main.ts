type Phone = string | string[] | number | number[]

function printPhoneNumbers(numbers: Phone){
    if (Array.isArray(numbers)){
        console.log(numbers, "Array");
    }
    else {
        console.log(numbers, typeof numbers);
    }
}

printPhoneNumbers(123)
printPhoneNumbers("123")
printPhoneNumbers(["123","456"])
printPhoneNumbers([123,456])