# Section 11: Using Webpack With TypeScript

## Module Introduction
- TypeScript & Webpack 
  - A Modern Build Workflow 
- Module Content 
  - What Is Webpack? 
  - Example setup 

## What Is Webpack & Why Do We Need It?
- What is webpack?
  - Webpack is a bundling & "build orchestration" tool
  - "Normal" Setup 
    - Multiple .ts files & imports (Http requests)
    - Unoptimized code (not as small as possible)
    - "External" development server needed 
  - With Webpack 
    - Code bundles, less imports required 
    - Optimized (minified) code, less code to download 
    - More build steps can be added easily 

## Installing Webpack & Important Dependencies
- `npm i --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader`

## Adding Entry & Output Configuration
- Webpack uses NodeJS features, so we use the NodeJS export syntax 
- It will start with your app.ts and then start with the imports there 
- You need to remove.js on all your imports 

## Adding TypeScript Support With the ts-loader Package
- module tells webspack how to work with the files it finds 
  - You add in rules 
- You need to set source map to true because this helps us build our code 
- To use webpack we can add a script in our package.json
- You can find your source map files in sources under the webpack place 

## Adjust Webpack Config
- A note on changes if using more recetn versions of webpack 

## Finishing the Setup & Adding webpack-dev-server
- Finished setting up build and webpack 

## Adding a Production Workflow
- `npm i clean-webpack-plugin` - this will remove the dist folder every time we build 

## Wrap Up
- We added webpack to help us bundle our files into one bundle 

## Useful Resources & Links
- Links to code snapshots and links to learn more about webpack