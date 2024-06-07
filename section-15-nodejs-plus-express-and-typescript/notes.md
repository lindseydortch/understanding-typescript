# Section 15: Node.js + Express & TypeScript

## Module Information
- Using Node.js & Express with TypeScript 
  - Another Popular combination 
  - This section requires Node and Express knowledge 

## Executing TypeScript Code With Node.js
- Node is not capable of executing typescript, it doesn't care about the extension, it executes whatever is in there 
  - It treats every file you run as a js file 
- You can use ts-node to have this run in one step - this is not ideal for production 

## Setting Up a Project
- We don't need a complex webpack setup 

## Finished Setup & Working With Types (In Node + Express Apps)
- require - is a node function, so typesscript will throw an error, so we need to install the types package 
- CommonJS is the most common way to import, but we can also import the other way 

## Adding Middleware & Types
- Added in routes and middleware and used the express types to set our middleware 

## Working With Controllers & Parsing Request Bodies
- Instead of importing all the types we want to work with and adding them to every single request handler, we can just import the request handler 

## More CRUD Operations
- To get better TypeScript support we can add the type our generic type will return 

## Wrap Up
- More examples to work with TypeScript and Node.js, you can use NestJS (it has TypeScript support built in out of the box)

## Useful Resources & Links
- Links to code snapshots and other helpful resources 