console.log("Section 6!!");

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type EleveatedEmployee = Admin & Employee;

const e1: EleveatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Function Overloads - line below
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// const result = add(1, 5);
const result = add("Lindsey", "Dortch");
result.split(" ");
console.log(result);

// Optional Chaining
const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" }
};

console.log(fetchedUserData?.job?.title);

// Nullish Coalescing
const userInput = null;

const storedData = userInput ?? "DEFAULT";
console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);

//     if ("startDate" in emp) {
//       console.log("Start Date: " + emp.startDate);
//     }
//   }
// }

// printEmployeeInformation(e1);

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading Cargo... " + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// // Discriminated Unions
// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("Moving with speed: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 12 });

// // Type Casting
// // const paragraph = document.querySelector("p");
// // const paragraph = document.querySelector("#message-output");
// // const userInputElement = <HTMLInputElement>(
// //   document.querySelector("#user-input")
// // );
// const userInputElement = document.querySelector(
//   "#user-input"
// )! as HTMLInputElement;

// userInputElement.value = "Hi there!";

// // Index Properties
// interface ErrorContainer {
//   // {email: 'Not a valid email', usrname: 'Must start with a letter'}
//   id: string;
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   id: "e1",
//   email: "Not a valid email!",
//   username: "Must start with a capital character!"
// };
