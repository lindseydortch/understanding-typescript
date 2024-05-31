const userName = "Max";
// let age = 30;

// age = 29;

// const add = (n1: number, n2: number = 1) => n1 + n2;

// console.log(add(5, 2));
// console.log(add(5));

const button = document.querySelector("button");

button?.addEventListener("click", event => console.log(event));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];

// activeHobbies.push(...hobbies);
console.log(hobbies);
console.log(activeHobbies);

const person = {
  firstName: "Max",
  age: 30
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  let result = 0;
  return numbers.reduce((cur, val) => {
    return cur + val;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// const hobby1 = hobbies[0]
// const hobby2 = hobbies[1]
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const { firstName, age } = person;
