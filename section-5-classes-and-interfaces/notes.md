# Section 5: Classes & Interfaces

## Module Introduction
- Classes & Interfaces 
  - Working With Objects 
- Module Content 
  - What & Why? 
  - Classes & Interitance 
  - Interfaces

## What Are Classes?
- What's Object-Oriented Programming (OOP)? 
  - Work with (real-life) entities in your code 
  - Product List 
    - Renders a list of products which were fetched from a server (database)
    - Object holds rendering + fetching logic 
  - Product 
    - Renders details about a product and allows addition to cart 
    - Object holds rendering + cart-adding logic 
  - ShoppingCart 
    - Renders cart products and total and allows user to order them 
    - Object holds rendering + ordering (server communication logic)
- Classes & Instances 
  - Objects 
    - "The things your work with in code" 
    - Instances of classes (= based on classes)
    - Class-based creation is an alternative to using object literals 
  - Classes 
    - "Blueprints for objects" (theoretical definition)
    - Define how objects look like, which properties and methods they have 
    - Classes make creation of multiple similar objects much easier 

## Creating a First Class
- Classes aren't key value pairs, it defines the name of the key you will have in that object and the value type 
- constructor allows you to do some initialization work 

## Compiling to JavaScript
- Vanilla JS's old way of creating a class was using a constructor function 
  - The new way was added in ES6

## Constructor Functions & the "this" Keyword
- You can add methods to the class 
- this points to the concrete instance of the class that was created and then we can access using dot notation 
- this - refers to the thing that is responsible for calling the method 
- You can add this to your method and then the class it is refering to

## "private" and "public" Access Modifiers
- You want to make sure there is one clear path so data cannot be manipulated and accessible outside of the class  
- Side-note: Besides properties, you can also mark methods as "private" 
- private means that the property is only accessible inside of the class
- public is the default 
- JS doesn't know public and private in the past 
- Vanilla JavaScript's private field syntax also does NOT use the "private" and "public" keywords (see resource link) -- this has been updated 

## Shorthand Initialization
- You can initialize a property in the constructor function instead of defining twice 

## "readonly" Properties
- readonly - makes sure if you try to write to this property after initialization you cannot change it after 

## Quiz 4: Class Basics
Quiz on Class Basics 

## Inheritance
- You can only inherit from one class, not multiple 
- You have to call super first before you do anything with the this keyword 

## Overriding Properties & the "protected" Modifier
- We can override methods of our base class 
- private properties is available inside our parent class, but not our extended classed, to work around this, we change our private to 'protected'
- protect is like private, but it's available to classes that extend that class 

## Getters & Setters
- getter - where you retrieve a value 
  - It does have to return something 
- setter - sets the value so you can use 

## Static Methods & Properties
- Allow you to add properties and methods to classes that are not accessed on an instance of the class, but which you access directly on the class 
  - You don't have to call it as a new class 
  - Example `Math.PI`
- Keep in mind, you cannot access them because they are detached from instances 
  - If you would like to access you would have to reference the class name 

## Abstract Classes
- Makes sure a method is utilized on extended classes 
- Lets you share a common method or property 
- You cannot instantiate an abstract class 

## Singletons & Private Constructors
- Singleton - making sure you have one instance of a certain class 
  - Example we only have 1 accounting department 
  - We set the constructor to private and this insures we can't call new on it 
  - So then we use a static method 

## Classes - A Summary
- We learned out classes, private, readonly, protected, inheritance, etc. 

## Quiz 5: Classes
Quiz on Classes 

## A First Interface
- An interface describes the structure of an object 
  - Only exists in TypeScript
- Just like in classes - there, we also seperate properties via semi-colons 

## Using Interfaces with Classes
- An interface and custom type are not the same 
  - interface is clearer, it is super clear you want to define the structure of an object with that 
  - You'll see more interfaces than custom types 
  - You can share this across your classes 
- You can implement more than one interface 
- Interfaces are used to share functionality and structure and features the class should have 

## Why Interfaces?
- When we want to easily share functionality across classes that rely on the same structure 
- We don't have to know everything about an object or class, so this is perfect 

## Readonly Interface Properties
- You can add readonly, you cannot do public or private 
- You can use readonly on a type as well 

## Extending Interfaces
- We can use the `extends` keyword to extend an interface 
- You can merge multiple interfaces into one single interface

## Interfaces as Function Types
- They can be used to find the structure of a function, types are more common 

## Optional Parameters & Properties
- You add a question mark after the property name 
- You can also mark methods as opetion! => myMethod?() 

## Compiling Interfaces to JavaScript
- You don't see the interface in the compiled JS 
  - There is no translation for interfaces
  - It is a PURE development feature 

## Quiz 6: Interfaces
Quiz on Interfaces 

## Wrap Up
- We had a detailed look at classes and then learned about the TypeScript feature of interfaces 

## Useful Resources & Links
- Links to code snippets and more on JS Classes and TS interfaces