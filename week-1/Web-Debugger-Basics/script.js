// let frontEnd = ["HTML", "CSS", "Javascript"];

// let frontEnd = ['HTML', 'CSS', 'Javascript'];
// let frontEndLangages = frontEnd;

// let frontEnd = ["HTML", "CSS", "Javascript"];
// let frontEndLangages = frontEnd;

// function foo() {
//   let sum = 0;
//   for (let i = 1000; i < 2000; i++) {
//     if (i % 203 === 0) {
//       sum += getSecondDigit(i);
//     } else if (i % 497 === 0) {
//       sum += getLastDigit(i);
//     } else if (i % 293 === 0) {
//       sum += getLastDigit(i * 13);
//     }
//   }
//   return sum;
// }

// function getSecondDigit(number) {
//   return parseInt(number.toString().split("")[0]);
// }

// function getLastDigit(number) {
//   return parseInt(number.toString().split("")[number.length - 1]);
// }

// foo();

//spot check
// 1. no. press the play button to continue
// 2. 3 times
// 3. yes 1491

function foo() {
  let sum = 0;
  for (let i = 1000; i < 2000; i++) {
    if (i % 203 === 0) {
      sum += getSecondDigit(i);
    } else if (i % 497 === 0) {
      sum += getLastDigit(i);
    } else if (i % 293 === 0) {
      sum += getLastDigit(i * 13);
    }
  }
  return sum;
}

function getSecondDigit(number) {
  return parseInt(number.toString().split("")[0]);
}

function getLastDigit(number) {
  let numberLength = number.toString().length;
  return parseInt(number.toString().split("")[numberLength - 1]);
}

foo();

// 1. 17
// 2.
