# Section 10: Modules & Namespaces

## Module Introduction
- Writing Modular Code 
  - Splitting Your Code Into Modules 
- Module Content 
  - Two Options to Organized Code In Multiple Files 
  - Demo

## Writing Module Code - Your Options
- Splitting Code Into Multiple Files 
  - Namespaces & File Bundling 
    - Use "namespace" code syntax to group code 
    - Per-file or bundled compilation is possible (less imports to manage)
  - ES6 Imports/ Exports 
    - Use ES6 import / export syntax 
    - Per-file compilation but single <script> import 
    - Bundling via third-party tools (e.g. webpack) is possible 

## Working With Namespaces
- You can put anything into a namespace 
- You use `namespace NameSpaceName {}`
- To use something inside a namespace, you add export in front of it 
  - We do have to import the namespace into the other file you want to use it in 
    - `/// <reference path="drag-drop-interfaces.ts />`
- You can split namespaces across mutltiple files, but you have to put the things that want to use that namspace into the same namespace 

## Organizing Files & Folders
- If you have more than 3 or 4 files you end up with two many split files 
- You can split these up by: 
  - decorators 
  - models 
    - This can include interfaces 
  - util
  - state

## A Problem With Namespace Imports
- Walkthrough of issues with namespace imports 

## Important: Use Chrome or Firefox
- Features we will be using going forward only work in modern browsers 

## Using ES Modules
- ES6 Modules exist outside of the TypeScript world 
- ES6 Modules use the `export keyword`
- You can emit the `.js` on your imports when using Webpack or angular, but when you don't you need to include it 

## Understanding Various Import & Export Syntaxes
- You can use `*` to group everything 
- You can aslo set an import an alias using the `as` syntax 
- You can work with default exports 
  - Tells JS this is the main or default export of this file 
  - You can mix names and default exports, but you can only have one
  - You don't use the `{}` with this 

## How Does Code In Modules Execute?
- How often does the code run? 
  - It runs once when the file is imported for the first time by any other file 

## Wrap Up
- Using modules is a super useful feature to make your code more maintainable 
- The way we are using modules only work in modern browsers, so the app won't run in older browsers 
  - We can use a bundling tool to make this work and ship one file only 
- Calling multiple files causes longer request times 

## Useful Resources & Links
- Links to code snapshots and link to learn more about JavaScript modules and ES Modules