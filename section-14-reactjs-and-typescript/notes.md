# Section 14: React.js & TypeScript

## Module Introduction
- Using React with TypeScript 
  - A popular combination 

## Setting Up a React + TypeScript Project
- create-react-app supports TypeScript out of the box
  - You can also look at the documentation on how to add it to an existing project 
- .tsx lets you also write jsx along with typescript 

## How Do React + TypeScript Work Together?
- index.tsx - there is nothing special 
- app.tsx - React provides its own types 
  - It uses the react types package 
  - .FC - FunctionComponent 
  - This can be changed to a class based component as well 

## Working With Props and Types For Props
- If you rely on props, you need to tell TypeScript what these props should look like 
  - We do this in an interface to save space and then we point to the props interface next to our component 

## Getting User Input With "refs"
- useRef turns out to be a generic function, so we need to provide a default value 

## Cross-Component Communication
- We have to set up an interface or type definition to pass the props from the parent down 
- interface 
  - `onAddTodo: (todoText: string) => void`

## Working With State & Types
- When using `useState`, if you initialize it as an empty array, we have to tell TypeScript what our state is going to look like 
  - `const [todos, setToDos] = useState<{id: string; text: string}[]>([])`
- If you're going to be using the state all over the place you'll create a separate interface and then import it and then you can update the above to get rid of that long object and use `<Todo>`

## Managing State Better
- To guaranteee that we get the most up to dat todos, we send back a function and return it 

## More Props & State Work
- Added in functionality to delete a to do item 

## Adding Styling
- Added in stylesheets and then updated id's 

## Types For Other React Features (e.g. Redux or Routing)
- Redux has documentation on using Redux with TypeScript 
- React router doesn't work with TypeScript out of the box, but you can download the types through npm 

## Wrap Up
- Everything you've learned throughout can be tweaked in React even though it comes with out of the box typescript support 

## Useful Resources & Links
- Links to code snapshots and links to other resources 