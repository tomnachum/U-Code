function isNumber(elem) {
    return !isNaN(parseInt(elem));
}
function sum(elem) {
    if (typeof elem === "number") {
        return elem;
    }
    else if (typeof elem === "string" && isNumber(elem)) {
        return +elem;
    }
    else if (Array.isArray(elem)) {
        var sum_1 = 0;
        elem.forEach(function (e) { return (isNumber(e) ? (sum_1 += +e) : 0); });
        return sum_1;
    }
    else {
        return 0;
    }
}
console.log(sum(1));
console.log(sum("1"));
console.log(sum([1, 1, 1]));
console.log(sum(["2", "-2", "1"]));
console.log(sum(["2", "asdf", "-2", "3"]));
console.log(sum(["2", "asdf", "-2", 3, 4]));
console.log(sum("23"));
console.log(sum("Tomer"));
console.log(sum(44));
console.log(sum(["test", 22, 55, "block", "9"]));
console.log(sum([23, 433, 11]));
