// These function are rendered from 'js-es6.js' file.
// import User, { printName as printUserName, printAge } from "./condition-statement/js-es6.js"        // Using 'as' we will be able define an alias to a function/class

// const user = new User("Bob", 11)
// console.log(user)
// printUserName(user)
// printAge(user)
// 

// These function are rendered from 'not-using-switch.js'
// import { switchAlternative, switchMapAlternative } from "./condition-statement/not-using-switch.js";
// const extension = ".css"
// switchAlternative(extension)
// switchMapAlternative(extension)

// These function are rendered from 'if-else-statement.js'
import { conditionStatement, conditionTriStatement } from "./condition-statement/if-else-statement.js";
conditionStatement(8, 6)
conditionTriStatement(2, 6, 8)


// --------------------------------------------------------------------------------------------------------------------------------
// Key Takeaways: 
//              :: objects = {} are similar to dictionary in Python with key, value properties

// OBJECTIVE: Learn Object-oriented Programming in JavaScript

// const circle = {
//     radius:1,
//     location: {
//         x: 1,
//         y: 1,
//     },
//     draw: function(){
//         console.log("draw");
//     }
// };

// circle.draw()

// Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log("draw");
//         }
//     };
// }

// const circle = createCircle(1);
// circle.draw() 


// Constructor Function
// function Circle(radius) {
//     this.radius = radius;
//     this.length = 1;
//     this.draw = function() {
//         console.log("draw");
//     }
// }

// Note: 'this' refers to the object similar to Python

// Circle.call({}, 1);
// Circle.apply({}, [1,2,3]);   // 'apply' is useful for array
// const another = new Circle(1);

// Note: when using constructor function, 'return' statement is not needed since 'new' automatically handles it
//     : function are objects that have constructors to call the function
//     : when using 'new' operator, it will create an empty object (a dictionary in Python) with a call method
//       and will determine or reference to the 'this'

//     : without 'new', it will point to the global object which is Window






// OBJECTIVE: Learn Value vs Reference Types

// Value Types: Number, String, Boolean, Symbol, undefined, null
// Reference Types: Object, Function, Array

// Remove slash to run the sample(s) and enter the variable name(x, y) in the browser console
//
// Objectve: We will check if variable y will change if variable x value is changed

// Sample 1: 
// let x = 10;
// let y = x;
// x = 20

// Console input:
//     x
//     y
// Console output:
//     10
//     10
//
// Sample  2:
// let x = {value: 10};
// let y = x;
// x.value = 20;

// Console input:
//     x
//     y
// Console output:
//     {value: 20}
//     {value: 20}
//
// Sample 3:
// let number = 10;
//
// function increase(number) {
//     number ++;
// }
//
// increase(number);
// console.log(number);
// Console output:
//     10

// Sample 4:
// let obj = {value: 20};

// function increase(obj) {
//     obj.value++;
// }

// increase(obj);
// console.log(obj);
// Console output:
//     {value: 21}

// Conclusion:
//      :: in JS, Value types are also called Primitives while Reference types are objects
//      :: when using an object('{}'), the object is not stored in the variable so generally means primitives are copies by their value
//      :: the object have an ID that the variable name (x,y) will point so any changes of x is visible to y in this scenario
//         or in lay mans term, objects are copied by their reference






// OBECTIVE: Learn Adding/Removing Properties

// function Circle(radius) {
    // this.radius = radius;
    // this.length = 1;
    // this.draw = function() {
        // console.log("draw");
    // }
// }
// const circle = new Circle(10);

// ADD Property
// Sample 1: We will try to add a new property of Circle function
// circle.location = {x: 1};
// Console input:
//      circle
// Console output:
//      Circle {"radius": 10, "length": 1, "location": {"x": 1}, draw:f ()}

// We will try to access property with bracket notation '[]'
// Note: bracket notation is useful when access undefined properties such as user-added properties with space or special characters
// const propertyName = "location";  // we can use defined property name for dynamic access to properties
// circle[propertyName] = {x: 1};


// DELETE Property
// delete circle[propertyName];
// Console input:
//      circle
// Console output:
//      Circle {"radius": 10, "length": 1, draw: f}

// Conclusion:
//      :: in JS, accessing a property in an object is similar in accessing a property in Python.
//      :: for no experience in Python, an object property can be accessed using the bracket notation '[]'.
//      :: we can add a new property using dot '.' notation, this is similar to updating or adding new object property in Django object/models.






// OBECTIVE: Enumerating Objects

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log("draw");
//     }
// }
// const circle = new Circle(10);

// We will access the key and value of the circle object
// for (let key in circle){
//     // To get only the properties and not the methods of the function
//     if (typeof circle[key] !== 'function')
//         console.log(key, circle[key])
// }
// Console output:
//      radius 10

// Another approach on getting the keys of the object
// const keys = Object.keys(circle);   // will return keys inside an array
// console.log(keys);
// Console output:
//      (2) ['radius', 'draw']      // (2) - returns how many members, ['radius', 'draw'] - members

// if ('radius' in circle)
    // console.log("Circle has a radius.");

// Console output:
//      Circle has a radius.

// Conclusion:
//      :: we can get the keys of the object using 'Object.keys()'
//      :: we can check if a property is in an object by using "in" keyword
//      :: to enumerate the property of an object, use "for" loop






// OBJECTIVE: Abstraction
                //  - means to hide the details, show only the essentials.

// Sample 1.A
// function Circle(radius) {
//     this.radius = radius;

//     this.defaultLocation = {x:0, y:0};      // hide this property to the user
//     this.computeOptimumLocation = function(){       // hide this property
//         // ...
//     }

//     this.draw = function() {
//         this.computeOptimumLocation();
//         console.log("draw");
//     }
// }
// const circle = new Circle(10);
// circle.defaultLocation = false      // if we try to add a new property in the object, it will break the defaultLocation object

// Conclusions:
//      :: we must keep in mind that in OOP, we must hide the details and show only the essentials.


// OBJECTIVE: Private Properties and Methods
// Sample 1.B 
// function Circle(radius) {
    // this.radius = radius;

    // let defaultLocation = {x:0, y:0};      // convert 'this' to 'let' to hide the property from the Circle object
    // let computeOptimumLocation = function(factor){       // convert 'this' to 'let' to hide the property from the Circle object
        // ...
    // }

    // this.draw = function() {
        // computeOptimumLocation(0.1);           // now call computerOptimumLocation without 'this' and this will become a property of the object because of 'closure'
        // console.log("draw");                   // 'closure' determines what variables is accessible in the inner function
    // }
// }
// const circle = new Circle(10);
// circle.defaultLocation = false 
// circle                                     // on this line, if you add '.' after 'circle' and multiple lines of keyword appear, 'radius' and 'draw' are visible because of 'this' and we hid them from the previous line

// Conclusion:
//      :: variables defined in 'let' or 'const' stays in memory but only 'this' variables are visible to the object
//      :: if you want to access the properties of the object, use 'this'
//      :: it is much easier to have less properties to prevent issues later down the road






// OBJECTIVE: Getters/ Setters
 
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = {x:0, y:0};     

    // this.getDefaultLocation = function(){          // if we want to return a private variable, use the 'this' keyword and add a 'function()' returning the variable
    //     return defaultLocation;
    // }

    this.draw = function() {
        computeOptimumLocation(0.1);            
        console.log("draw");                    
    }
    // this is the syntax of Object.defineProperty ('this' is the object, 'defaultLocation' is the name of variable, object is we want to return is shown below on the third parameter)
    Object.defineProperty(this, 'defaultLocation', {            // the 'defaultLocation' is refer to as readonly property
        // key:value
        get: function() {
            return defaultLocation;
        },
        set: function(value) {                          // to change a property, you can use 'set' and pass a parameter(value) in the function
            if (!value.x || !value.y)                   
                throw new Error('Invalid location.');

            defaultLocation = value;
        }
    })

}
const circle = new Circle(10);
circle.defaultLocation = {x:2, y:1};

// Console input:
//      circle
// Console output:
//      Circle {radius: 10, draw: ƒ}
//          draw : ƒ ()
//          radius : 10
//          defaultLocation : Object
//          get defaultLocation : ƒ ()          // the 'get' keyword is a getter that is used to read a property
//          [[Prototype]] : Object


// Conclusion:
//      :: in Object-Oriented Programming, 'let' are considered private variables of the function
//      :: getter is a function used to read a property
//      :: use 'Object.defineProperty' to define getter/setter