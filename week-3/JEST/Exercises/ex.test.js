const Exercise = require("./ex");

//Ex1
test("isEven should return true when n===2,0,-2", () => {
  const exercise = new Exercise();
  expect(exercise.isEven(2)).toBeTruthy();
  expect(exercise.isEven(0)).toBeTruthy();
});

test("isEven should return true when n===1,-1", () => {
  const exercise = new Exercise();
  expect(exercise.isEven(1)).toBeFalsy();
  expect(exercise.isEven(-1)).toBeFalsy();
});

//Ex2
test("removeAtLeastOne should remove an item from non empty array", () => {
  const exercise = new Exercise();
  const mockData = [1, 2, 3];
  returnedArr = exercise.removeAtLeastOne([...mockData]);
  expect(returnedArr.length).toBeLessThan(mockData.length);
});

test("removeAtLeastOne should not remove an item from empty array", () => {
  const exercise = new Exercise();
  const mockData = [];
  returnedArr = exercise.removeAtLeastOne([...mockData]);
  expect(returnedArr.length).toBe(0);
});

//Ex3
test("simplify should remove '!', '#', '.', ',', ''' from end of a given string", () => {
  const exercise = new Exercise();
  const mockData = "aaa!#.,'";
  const returnedStr = exercise.simplify(mockData);
  expect(returnedStr).toBe("aaa");
});

test("simplify should remove '!', '#', '.', ',', ''' from begining of a given string", () => {
  const exercise = new Exercise();
  const mockData = "!#.,'aaa";
  const returnedStr = exercise.simplify(mockData);
  expect(returnedStr).toBe("aaa");
});

test("simplify should remove '!', '#', '.', ',', ''' from a string", () => {
  const exercise = new Exercise();
  const mockData = "!#.,'";
  const returnedStr = exercise.simplify(mockData);
  expect(returnedStr).toBe("");
});

test("simplify should not remove anything from an empty string", () => {
  const exercise = new Exercise();
  const mockData = "";
  const returnedStr = exercise.simplify(mockData);
  expect(returnedStr).toBe("");
});

test("simplify should not remove anything from a string without symbols", () => {
  const exercise = new Exercise();
  const mockData = "";
  const returnedStr = exercise.simplify(mockData);
  expect(returnedStr).toBe("");
});

//Ex4
test("validate should return error if there are no boolean in the array", () => {
  const exercise = new Exercise();
  const mockData = [1, 2, 3];
  const returnedVal = exercise.validate(mockData);
  expect(returnedVal).toStrictEqual({ error: "Need at least one boolean" });
});

test("validate should return true if there are more trues than falses in the array", () => {
  const exercise = new Exercise();
  const mockData = [true, true, false];
  const returnedVal = exercise.validate(mockData);
  expect(returnedVal).toBeTruthy();
});

test("validate should return false if there are more falses than trues in the array", () => {
  const exercise = new Exercise();
  const mockData = [false, true, false];
  const returnedVal = exercise.validate(mockData);
  expect(returnedVal).toBeFalsy();
});

test("validate should return false if there are same number of falses and trues in the array", () => {
  const exercise = new Exercise();
  const mockData = [false, true];
  const returnedVal = exercise.validate(mockData);
  expect(returnedVal).toBeFalsy();
});

test("validate should return true if there are more trues than falses in the array, regardless to other elements", () => {
  const exercise = new Exercise();
  const mockData = [5, true, true, false, "hi"];
  const returnedVal = exercise.validate(mockData);
  expect(returnedVal).toBeTruthy();
});
