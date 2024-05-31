# Section 3: The TypeScript Compiler (And Its Configuration)

## Module Introduction
- The TypeScript Compiler 
  - Configuring & Using the TypeScript Compiler 

## Using "Watch Mode"
- `tsc app.js -watch`
- Don't quit this watch mode process whilst developing. You can quit thereafter via `CTRL + C`

## Compiling the Entire Project / Multiple Files
- We need to run `tsc --init` - you initialize this in the project folder 
  - Creates a tsconfig.json

## Including & Excluding Files
- You can import files using modules, we will cover this in a later section 
- Our tsconfig.json has a ton of options 
- You can exlude all files that end in a certain way `*.dev.ts` or `**/*.dev.ts`
- We often have to go in and exclude node_modules, but it is automatically excluded 
- Exclude will filter down to include 
- You have a "files" option, this is where you can set just a list of files 

## Setting a Compilation Target
- Our `compilerOptions` allow us to control how our files are compiled 
- target - tell typescript which JS version you want to compile the code 
- If you don't set your target it compiles down to es3

## Understanding TypeScript Core Libs
- lib - allows you to sepcify which default options and features TypeScript knows 
- If it isn't set, then it assumes all the ES6 features and DOM API's 

## More Configuration & Compilation Options
- allowJS - will compile JS files 
- checkJS - Report errors in .js files 
- jsx - used for React 

## Working With Source Maps
- Source Map - helps with debugging and development 
  - Will show our .ts files in the console 

## rootDir and outDir
- outDir - you can set where your files compile out to 
  - dist - might hold our outputted files 
  - source - might hold our ts files 
- rootDir - you can set to a src folder 
- removeComments - remove comments to make your files smaller 
- noEmit - set to true, to have it check your files and report any errors 
- downlevelIteration - gives you a more exact compilation, use when you have loops and generated code is acting differently than it should 

## Stop Emitting Files on Compilation Errors
- noEmitOnError - fixes the error when we are working with the DOM 
  - false is the default 
  - Doesn't generate problematic files 

## Strict Compilation
- strict 
  - sets all the type-checking options to true 
- noImplicitAny 
  - Ensures we have to be clear about the values and parameters we are working with in our code 
- StrictNullChecks 
  - The DOM element issue 
  - Tells TypeScript to be strict on how you access and work with values that might hold a null value 
  - ! - tells the editor that you know this will be true and that it will work and that it does exist 
    - If you don't know if it will work, it may be better to work with an if check 
- strictFunctionTypes 
  - will catch some niche bugs 
  - You can introduce bugs if you work with classes and inheritance so good to have on 
- strictBindCallApply 
  - When using .bind() and we set the value, it checks if what we're setting here makes sense with the function we are calling 
- alwaysStrict 
  - Makes sure the JS files being output are using strict mode 

## Code Quality Options
- noUnusedLocals - throws an error when a variable isn't used, won't throw an error on global variables 
- noUnusedParameters - same as noUnusedLocals, but for function parameters 
- noImplicitReturns - will throw an error when we have a function that will sometimes return something or not 
  - You have to return something in every case 

## Debugging with Visual Studio Code
- Make sure you have the right extensions downloaded
  - ESLint 
  - Prettier 
  - Debugger for Chrome - allows you to debug your files inside Chrome inside of VSCode -- you can now use the built-in debugger (will have you create the same launch.json file)

## Wrap Up
- We took a look at all of the different options in TypeScript to compile our code and how we can debug inside VSCode 

## Useful Resources & Links
- You can find the tsconfig, compiler and VSCode TS Debugging docs here 