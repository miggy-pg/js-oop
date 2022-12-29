// Note: You can uncomment specific line to run them in the console

// OBJECTIVE: Learn JavaScript ES6 modules to have code clean and maintainable

// export default class User {                    // here we have defined a User class that have name and age
//     constructor(name, age) {                   // this type of exporting is inline where we define `export` on the function/class itself
//         this.name = name
//         this.age = age
//     }
// }

// export function printName(user) {                      // here we have a function that will print the user's name
//     console.log(`User's name is ${user.name}`)         // the `export` is defined in this function so that we can use this on the `index.js` file
//                                                        // this type of exporting is inline where we define `export` on the function/class itself
// }

// export function printAge(user) {                       // here we have a function that will print the user's age 
//     console.log(`User is ${user.age} years old`)       // the `export` is defined in this function so that we can use this on the `index.js` file
// }

// Two types of exporting:
// export default User                                 // this is going to export the User object as the default class/function for the `js-es6.js` file
// export { printName, printAge }                      // this is going to export specific function/class for the `js-es6.js` file

// Takenote: you can only `export default` 1 thing so usually it is your class