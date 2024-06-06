# Section 12: 3rd Party Libraries & TypeScript

## Module Introduction
- TypeScript & 3rd Party Libraries 
  - Utilizing TypeScript's Power 
- Module Content 
  - "Normal" Libraries & Using them with TypeScript 
  - TypeScript-specific libraries 

## Using JavaScript (!) Libraries With TypeScript
- lodash - is a npm package, we don't need typescript for it 
- TypeScript does understand what the third parties support 
- You can download the types for TypeScript, just look them up on Google 

## Using "declare" as a "Last Resort"
- What do you do when a you can't download types for a third party library?
  - You can use the declare command 

## No Types Needed: class-transformer
- class-transformer - you define a class and import into your app.js 
  - When you fetch data, your object doesn't come as an instance of your class or model
  - This package makes it easy to convert your data into the right models  

## TypeScript-embracing: class-validator
- class-validator - builds up on the concept of TypeScript decorators, so you don't have to re-invent the wheel 

## Wrap Up
- With TypeScript you can use regular packages and some have types you can install after 

## Useful Resources & Links
- Links to Code Snapshots and other resources