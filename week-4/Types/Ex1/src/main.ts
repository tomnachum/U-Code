function sum(numbers:number[]):number{
    let s: number = 0
    for (let i=0; i<numbers.length; i++){
        s+=numbers[i]
    }
    return s
}

function isEven(num:number):boolean{
    return num%2===0
}

function runExamples(numbers:number[]){
    const sumOfNums = sum(numbers)
    const isSumEven = isEven(sumOfNums)
    console.log(numbers, sumOfNums, isSumEven);
}

runExamples([1,1,1])
runExamples([1,1,1,1])
runExamples([1,2,3])