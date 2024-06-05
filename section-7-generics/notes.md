# Section 7: Generics

## Module Introduction
- Generics 
  - Flexible & Re-Usable Code 
- Module Content 
  - What? 
  - Generic Functions & Classes
  - Constraints 
  - Special TypeScript Types 

## Built-In Generics & What Are Generics?
- An example would be an array 
  - Array is a generic type 
  - `Array<T>` -- when you see this you're working with a generic 
  - Generics require one type argument 
  - Generics are connected with some other type and is really flexible with what that other type is 
  - The Array type itself does not care about what information is stored 
- Another type built in, is the Promise Type 
- We give TypesScript the information of what it will eventually yield and then it will give you an error if it's not correct 
- You get better type safety with generic types 
- For more complex types 

## Creating a Generic Function
- You can build generic classes and functions
- To use Generic you put `<T>` before the function name and `<U>` - typescript will then infer that the function will return the intersection of T & U 
- object is a highly unspecific type, which is why we couldn't return the function an access the object values 

## Working With Constraints
- We use the `extends` keyword to tell TypeScript we want to extend T and U to a certain type 
- You don't have to constrain all generic types, but it is necesarry for our example function because we are using `Object.assign`

## Another Generic Function
- If you have a generi function, most likely your parameters will be of that type 

## The "keyof" Constraint
- You use `keyof` with the extends before a function 

## Generic Classes
- We have to account for primitive and not primitive types 

## A First Summary
- Generics give us flexibility combined with type safety 
- We get full support of what we pass in and provide some constraints 

## Generic Utility Types
- Partial - sets all of our properties are optional for our type and then we can use type casting to set it back when we return 
- readonly allows us to turn off the ability to push to an array or manipulate the data 
- Utility types are all generic 

## Generic Types vs Union Types
- With union types we accept any of the values, but with generic types you have to call it with one type and stick to it 
  - You're only allowed to use that type of data with generics 
  - You want to use union types when you're more flexible 

## Quiz 8: Generics
Quiz on Generics 

## Useful Resources & Links
- Link to code snapshots for setion and link to learn more about Generics