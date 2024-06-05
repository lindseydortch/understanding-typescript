# Section 6: Advanced Types

## Module Introduction
- Advanced Typing Concepts 
  - Beyond the Very Basics 
- Module Content 
  - Intersection types 
  - Type guards 
  - Discriminated unions 
  - Type casting 
  - Function Overloads 

## Itersection Types
- Intersection Types -- allows us to combine other types 
- Builds the intersection of these types, you won't use these all the time 

## More On Type Guards
- Type guards help us with union types 
- Our custom types won't work with the type guards 
  - We can use the `in` keyword 
- When working with classes you can also use the `instanceof` method 
  - Check's if it's an instance of a class
- Type Guard is basically checking if a property actually exist before you try to use it 

## Discriminated Unions
- A pattern you can use when working with union types that makes implmenting type guards easier 
  - Works with object and class types 
- You can't use instanceof on an interface 
- You can assign a type (not a typescript type) in ther itnerface and then write out a switch statement

## Type Casting
- Type Casting - helps you tell typescript that some value is of a specific type where typescript is not able to detect it on it's own 
- There are two ways of type casting 
  - You can either add it in front of the thing we are trying to convert 
  - You can use the `as` syntax - this is used to combat the same syntax that React uses 
- Since you are forcing TypeScript to use this type, it is your responsbility to make sure that you solve for any runtime errors 
- ! - tells typescript that this will never yield `null`
- Type Casting tells TypeScript that we know this value will never be null 

## Index Properties
- Allows us to create objects that are more flexible regarding the properties they might hold 
- Example an ErrorContainer - there are multiple cases for an error and you are clear with the value type, but you don't know how many properties it will have 
- When using index types, you can only use that same type in the other properties defined 

## Function Overloads
- Allows us to define multiple function signatures, for one in the same function 
  - Having multiple ways to call a function with different parameters
- You can also make other params optional 
- You get clear about the different types of things you can return from your function 

## Optional Chaining
- On objects when fetching data, we may not know if we are going to get that data or not 

## Nullish Coalescing
- If this is null or undefined, then use the fallback, if it is NOT null or undefined, we use the first option 

## Quiz 7: Advanced Types
Quiz On Advanced Types 

## Wrap Up
- Looked at Advanced TypeScript features that are commonly used and common patterns 

## Useful Resources & Links
- Link to all the code snapshots from this section and a link to learning more about Advanced Types