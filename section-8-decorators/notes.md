# Section 8: Decorators

## Module Introduction
- Decorators 
  - Meta-Programming - won't effect the end user, but instead writing code which is easier to use for other developers 
- Module Content 
  - What? 
  - Decorator Usage
  - Examples 

## A First Class Decorator
- Make sure to turn on the experimentalDecorators to true in your .tsconfig
- In the end a decorator is just a function 
- The @ symbol points at a function 
  - The decorator function should take in parameters 
    - It takes in a: 
      - target 
- Decorators execute when your class is defined, not when it is instantiated 

## Working With Decorator Factories
- A factory returns a decorator function and allows us to configure it when we assign it as a decorator to something 
- Decorators are very powerful for recreating reusable pieces of code

## Building More Useful Decorators
- Angular uses decorators 
  - Uses it for the components - Defines a template and a selector in the top 
- Meta-programming - uses a tool to expose to other developers -- extra utilities to developers for another class 

## Adding Multiple Decorators
- You can add more than one decortator to a class 
- In what order your decorators execute? 
  - Bottom most and then the next one up 
  - The decorator factories run earlier 

## Diving Into Property Decorators
- You can add a decorator to a property
  - This still takes in two arguments 
- Executes when you define the property 

## Accessor & Parameter Decorators
- You can also add descorators to methods in your classes 
- Static method receive the constructor function 
- Instance method - receives prototype of the object 
- You can also add decorators to paramters, this takes in the taget, name, and position instead of a descriptor 

## When Do Decorators Execute?
- All these decorators all execute when you define the class
  - They do not run at runtime 
  - Allow you to do behind the scenes work 
  - They are not event listeners
  - It's a function for when your class is defined 

## Returning (and Changing) a Class in a Decorator
- Some decorators are capable of returning a value 
- What you can return depends on the type of decorator you're working with 
- In classes you can return a new constructor function or class 
- _ - tells typescript that you know the param exists, but you don't have to use it 

## Other Decorator Return Types
- Decorators where you can return something: decorators and accessors 
  - You can return a brand new descriptor 
- Param and properties - return values are not supported here  
- Property descriptors - allow you to define a property in more detail 
  - You can update whethere it's configurable, enumerable, writable
- For an accessor you get access to the get and set along with the configurable and enumerable 

## Example: Creating An "Autobind" Decorator
- For a descriptor on the method decorator that allows us to change the method or change the configuration of the method 
- this - refers to the target of the event 
  - A common workaround is to use the .bind() method 
- This bind function is used to point the this keyword to the object your put it on 

## Validation with Decorators - First Steps
- Set Up the example of a validation decorator to check form inputs 

## Validation with Decorators - Finished
- Finished our validator with decorators 

## Fixing a Validator Bug
- Not on fixing validator bug 

## Wrap Up
- We looked at decorators, what we can do with them, their complexity and how we can use them 
- class validator is a third party library with different class validators you can use 
- Angular uses decorators, they are a core part of Angular 
- NestJS also embraces decorators 

## Useful Resources & Links
- Links to code snapshots and learning more about decorators 
