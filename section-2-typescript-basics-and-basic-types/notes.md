# Section 2: TypeScript Basics & Basic Types

## Module Introduction
- Focus of this Section:
  - Working With Types 
  - Core Syntax & Features 

## Using Types
- Core Types 
  - number 
    - 1, 5.3, -10
    - All numbers, no differentiation between integers or floats 
  - string 
    - "Hi", 'Hi', `Hi`
    - All text values 
  - boolean 
    - true, false 
    - Just these two, no "truthy" or "falsy" values 
- TypeScript's type system only helps you during development (i.e. before the code gets compiled)
  - It adds an extra sanity check 
  - It does not change our runtime code, later we can learn how to have it step in 

## TypeScript Types vs JavaScript Types
- Before TypeScript, we would check it with an input and validate the inputs during runtime and then throw an error 
- We can throw this at compilation 
- JavaScript is dynamically typed - perfectly fine we define a variable that may later change to a string 
- TypeScript is statically typed - we specify the type so that the type doesn't change, so it allows us to fix bugs earlier 
  - TypeScript knows more types than JavaScript 
- The key difference is: JavaScript uses "dynamic types" (resolved at runtime), TypeScript uses "static types" (set during development)

## Important: Type Casing
- The core primitive types in TypeScript are all lowercase 
  - string and number, etc. 

## Working With Numbers, Strings & Booleans
- All numbers are floats by default in JS and TS 

## Type Assignment & Type Inference
- `: type` - this is introduced by TypeScript, but JS does not, this is just used for the TS compiler 
- Why do we not have explicit types in our variables in the example? 
  - TS does something called Type Inference 
  - Type Inference - it is able to infer from the right side of the equal or what you initialize the variable with 
  - But you if you have an unassigned variable, later you should know that it will be this type 

## Quiz 1: Understanding Types
Quiz on Understanding Types 

## Object Types
- object 
  - {age: 30}
  - Any JavaScript object, more specific types (type of object) are possible 
- Object Types are written almost JS object, instead of key/value pairs, we get key/type pairs 
- For a specialized object type we do 
  - const objectName : {name: string, age: number} = {name: 'Lindsey', age: 28}
  - This is something you can do, but it's better to let TypeScript infer it 

## Nested Objects & Types
- Object types can also be created for nested objects, you just follow the same nested pattern in the object you're defining below 

## Arrays Types
- Array 
  - [1,2,3]
  - Any JavaScript array, type can be flexible or strict (regarding the element types)
- TypeScript will infer in an array if it's all one type a `string[]`
- Use the `any` type to use a mixed array, but don't use `any` too often, but you lose the benefits of TypeScript 
- When we loop through an array of strings, you can use string methods because typescript already inferred 

## Working With Tuples
- Tuple 
  - [1,2] 
  - Added by TypeScript: Fixed-length array 
- To define a Tuple, we add to our object type 
  - [number, string]
- .push() - is an exception allowed in Tuples 

## Working With Enums
- Enum
  - enum {NEW, OLD}
  - Added by TypeScript: Automatically enumerated global constant identifiers 
- Example: Setting a role to a number, 0 = admin, 1 = author, etc
- Makes it easier so we don't have to remember how we wrote certain things 
- Saves us work because we don't have to constantly define these 
- Important: Often, you'll see enums with all-uppercase values, but that's not a "must-do". You can go with ANY value names 
- You assign it with an uppercase because it is a custom type 
- you can also assign a value to the enum 
  - enum Role {ADMIN="ADMIN", READ_ONLY=true}
  - You define it up there and then use in your if checks, etc. 

## The "any" Type
- any 
  - * 
  - Any kind of value, no specific type assignment 
- Avoid whenever possible, because it gives you the same experience that you have using JavaScript, only use for values where you don't know what kind of data you will be working with 

## Union Types
- Used to tell typescript that we are okay with accepting more than one type on a variable 
  - To do this we use `|`
  - `type | type`
- You will not always need a runtime check, it just depends on the logic you are writing 

## Literal Types
- Literal Types - where you are very clear about the exact value it should hold 
  - TypeScript infers a const as what it is initialized as 
- You can type the union type with the literal type 
  - `resultConversion: 'as-number' | 'as-text'`

## Type Aliases / Custom types
- You can create a union type that you are constantly using, example: `number | string`
- We use `type Combinable = number | string`

## Type Aliases & Object Types
- You're not limited to storing just union types, you can provide an alias to a (possible complex) object type 
- See code example in lecture 

## Quiz 2: Core Types & Concepts
Quiz on Core Types & Concepts 

## Function Return Types & "void"
- TypeScript infers our return type, you can set it 
- void is common in other programming languages 
  - This function doesn't have a return statement 
  - If we use the return value of a function that return anything, we get 'undefined'
- 'undefined' is a valid error in TypeScript 
- If we set the function type to undefined, we have to include a empty `return;`

## Functions as Types
- If we set a variable to a function, it sets to any 
- We have to set the type to `Function`
- You can also define what we want the function to look like using Function Type 
  - `(a: number, b: number) => number`

## Function Types & Callbacks
- In the callback value, if we set it as void, it will not doing anything with a return when the callback is called 
- Callback functions can return something, even if the argument on which they're passed does NOT expect a returned value 

## Quiz 3: Functions & Types
Quiz On Functions & Types 

## The "unknown" Type
- unknown - we have to first check the current type of the variable 
- So you have to use an extra type check 
- `unknown` is a better choice over `any`, we just have to add the extra check, it makes sure that we are not allowed to do everything, but we at least have some type checking 

## The "never" Type
- Since an error is thrown, it crashes our script 
  - It never returns anything 
  - You will see the infered type is void, but you can be very clear and specify that it 'never' returns anything 
- An infinite function would also be an example of a function that returns never 

## Wrap Up
- We had a look at all of the different types, type aliases, literal and union types, and unknown and never 

## Useful Resources & Links
- A link to all the code snapshots in this section and useful links