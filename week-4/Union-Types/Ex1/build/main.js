"use strict";
function concat(toConcat, shouldPrint) {
    let concat = '';
    for (const s of toConcat) {
        concat += s;
    }
    if (!!shouldPrint) {
        console.log(concat);
    }
    else {
        console.log("Do not print");
    }
}
concat("hi", true);
concat("hi", false);
concat("hi", 0);
concat("hi", 1);
concat(["hi", "bye"], true);
concat(["hi", "bye"], false);
concat(["hi", "bye"], 0);
concat(["hi", "bye"], 1);
concat(["hi", "bye"], 2);
//# sourceMappingURL=main.js.map