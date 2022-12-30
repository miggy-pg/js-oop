// OBJECTIVE: Learn JavaScript Classes

// JAVASCRIPT STILL USES PROTOTYPES 
//      class
//      extends
//      constructor
//      super
//      get
//      set
//      static

// export class Vehicle{                                  // A Class is like you are defining blueprint or an object
//     constructor(_wheels){
//         this.numWheels = _wheels;                              // 'this' is like 'self' in Python. Basically, we are able to get this element within the class itself
//     }
//     get wheels(){
//         return this.numWheels;
//     }
//     set wheels(_wheels){
//         this.numWheels = _wheels;
//     }
//     static accelerate(){                                        // 'static' means they don't change and generally are shared within the object
//         console.log("go faster");                               // so what happens if we have multiple instances of the 'Vehicle' class, 'static' function are called
//     }                                                           // it is ideal to use 'static' if we want to display results that is similar
//     static decelerate(){
//         console.log("go slower");
//     }
//     justAMethod(){
//         // you can define a function inside a Class object without the keyword 'function'
//     }
// }

// export class Car extends Vehicle{                       // 'extends' is used to access element from a Class. In this case, we want to access all the elements of 'Vehicle' inside the 'Car' class
//     constructor(_wheels, _brand, _paint, _year){        // we are added '_' to specific parameters so that they are only accessible within the Class, this is similar to Python
//         super(_wheels);
//         this.brand = _brand;
//         this.paint = _paint;
//         this.year = _year;
//     }
//     info(){
//         console.log(this.numWheels, this.brand, this.paint, this.year)
//     }
// }
