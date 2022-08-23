// people_info = [
//   {
//     name: "guido",
//     profession: "bungalow builder",
//     age: 17,
//     country: "canaland",
//     city: "sydurn",
//     catchphrase: "what a piece of wood!",
//   },
//   {
//     name: "petra",
//     profession: "jet plane mechanic",
//     age: 31,
//     country: "greenmark",
//     city: "bostork",
//     catchphrase: "that's my engine, bub",
//   },
//   {
//     name: "damian",
//     profession: "nursery assistant",
//     age: 72,
//     country: "zimbia",
//     city: "bekyo",
//     catchphrase: "with great responsibility comes great power",
//   },
// ];

// const capitalize = function (str) {
//   let capitalizedStr = "";
//   capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
//   capitalizedStr += str.slice(1); //add the rest of str normallyreturn capitalizedStr
//   return capitalizedStr;
// };

// const getAge = function (age) {
//   if (age < 21) {
//     return "Underage";
//   } else if (age > 55) {
//     return "55+";
//   } else {
//     return String(age);
//   }
// };

// const getSummary = function (person) {
//   let summary = "";
//   summary += capitalize(person.name);
//   summary += ` is ${getAge(person.age)} `; //Yes - you can put a function call inside the tick quotes!
//   summary += capitalize(person.profession);
//   summary +=
//     " from " +
//     capitalize(person.country) +
//     "," +
//     capitalize(person.city) +
//     ". ";
//   summary += capitalize(person.name) + " loves to say ";
//   summary += '"' + capitalize(person.catchphrase) + '"';
//   return summary;
// };

// for (let i = 0; i < people_info.length; i++) {
//   console.log(getSummary(people_info[i]));
// }

const story =
  "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

function removeSpecialChars(str) {
  for (const c of specialChars) {
    str = str.replaceAll(c, "");
  }
  return str;
}

function storeInWordCounts(words) {
  for (const word of words) {
    if (word in wordCounts) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }
}

function buildWordCounts() {
  storyLowerCased = story.toLowerCase();
  storyWithoutSpecial = removeSpecialChars(storyLowerCased);
  const words = storyWithoutSpecial.split(" ");
  console.log(words);
  storeInWordCounts(words);
  console.log(wordCounts);
  return;
}

buildWordCounts();
