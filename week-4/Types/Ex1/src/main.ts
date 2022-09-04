function sum(numbers:number[]):number{
    let s: number = 0
    for (let i=0; i<numbers.length; i++){
        s+=numbers[i]
    }
    return s
}

