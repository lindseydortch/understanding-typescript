# Section 9: Practice Time! Let's Build a Drag & Drop Project

## Module Introduction
- Practice Time! 
  - Use TypeScript In A Project

## Getting Started
- All code will be in one `app.ts` file 
  - We will go over how to split into multiple files later 
- Template tags are default HTML -- allow us to specify HTML code that allow us to specify HTML code that is not rendered immediately 

## DOM Element Selection & OOP Rendering
- We will write this application using an Object Oriented Approach 
- Using template element - it doesn't know what type of element, in order to tell typescript about the type 
- Content is a property that exists on template elements 

## Interacting with DOM Elements
- Added in the functionality to view our form inout data 

## Creating & Using an "Autobind" Decorator
- Created an autobind decorator function 

## Fetching User Input
- Added functionality for getting data from the user input 

## Creating a Re-Uasable Validation Functionality
- Nullish Coalescinng - whatever is after the && if that returns true it will return true if not the first statement becomes false 
- With one ! - JS returns undefined or null 

## Rendering Project Lists
- Worked on functionality to rendering the project list sections 

## Managing Application State With Singletons
- Set up a class to manage the state of the application to push our form data to render  

## More Classes & Custom Types
- Set up classes and custom types for our Projects and Listeners 

## Filtering Projects With Enums
- Functionality added for separating the active and finished projects 

## Adding Inheritance & Generics
- Optional parameters should always come last so people don't forget to attach them 
- Reminder that using abstract before a class doesn't let you instantiate it 
  - You can't have private abstract methods 

## Rendering Project Items With a Class
- Added functionality for rendering the project items in the project list 

## Using a Getter
- Convention is to add getters and setters below other fields 

## Utilizing Interfaces to Implement Drag & Drop
- You have to add draggable to your HTML to let the HTML know that you will be adding a draggable feature 

## Drag Events & Reflecting the Current State in the UI
- 

## Adding a Droppable Area
- .dataTransfer - is accessible on drag events, but not ALL drag related events 
- You have to prevent the default in the drag over handle, so that the drop event fires 

## Finishing Drag & Drop
- Finished Drag and Drop Functionality 

## Wrap Up
- We built out a project using multiple TypeScript features 

## Useful Resources & Links
- Links to code snapshots and a link to learn more about drag and drop 