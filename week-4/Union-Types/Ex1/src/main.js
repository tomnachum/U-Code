function concat(toConcat, shouldPrint) {
    var concat = '';
    for (var _i = 0, toConcat_1 = toConcat; _i < toConcat_1.length; _i++) {
        var s = toConcat_1[_i];
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
// concat(["hi","bye"],2)
