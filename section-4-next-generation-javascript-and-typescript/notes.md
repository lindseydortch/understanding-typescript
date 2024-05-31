# Section 4: Next-Generation JavaScript & TypeScript

## Module Introduction
- TypeScript and Modern JavaScript
  - Using Next-Gen JavaScript Syntax

## "let" and "const"
- You can use the chart in the Resources to see what you can compile with TS and modern JS
- const - variable can't be changed
- let - similar to var, the scope in which this variable can be accessed using var, but you get access to block scope -- a block is a snippet inside {} -- only available in that block
- var - only available in the scope and at a higher level
  - You only have global and function scope

## Arrow Functions
- Returns an implicit return if it is one line
- If you have NO paramters, you HAVE TO use an empty pair of parentheses: () => {}

## Default Function Parameters
- You can assign defualt params on a function
  - Default arguments have to be at the end of the parameter list 
  - It adheres to the order 

## The Spread Operator (...)
- Exists on arrays and object 
  - We can push into an array 
  - For objects, we can make a copy of the key/value pairs and can be used anywhere you need key/value pairs 

## Rest Parameters
- Will merge the parameters into an array 
- .push() under the hood uses rest parameters 
- You can combine this with Tuples

## Array & Object Destructuring
- Destructuring does not change the original array 
  - When you spread while destructuring it creates a new array with the spread objects 
  - In objects, the values cannot be arbitrary 

## How Code Gets Compiled & Wrap Up
- Your code gets compiled to work in older browsers, if you change to an older version like es5, it has to use old workarounds 

## Useful Resources & Links
- Links to snapshots of code throughout section 