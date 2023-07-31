// Primitives: number, string, boolean
// More complex types: arrays, objects, function types, parameters

// Primitives
let age: number = 11;
age = 12;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

// More complex types
let hobbies: string[];
hobbies = ["Sports", "Cooking"];
// hobbies = ['Sports', 'Cooking', 10]; ERROR
let numbers: number[];

// any type by defualt - never used it!
let badPerson: any;

badPerson = {
  name: "Max",
  age: 32,
};

let person: {
  name: string;
  age: number;
};

let people: {
  name: string;
  age: number;
}[];

// Type inference - you cand avoid have to write ': string', is not a bad practice
let course = "React course";

// Union types - allows you two store more than one type in a single variable
let secondCourse: string | number = "React course";
secondCourse = 2323;

// Type aliases
type Person = {
  name: string;
  age: number;
};

let peopleArr: Person[];

// Functions & types - Infers the return types
function multiply(a: number, b: number) {
  return a + b;
}

// We explicity assign it
function multiply1(a: number, b: number): number | string {
  return a + b;
}

// return type void
function printOutput(value: any) {
  console.log(value);
}

// Generics - once a certain type was used for an function execution, that type is know and locked for that value. Ensures type safety
function insertAtBegining<T>(array: T[], value: T) {
  return [value, ...array];
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBegining(demoArray, 0);
const stringArray = insertAtBegining(["b", "c", "d"], "a");
