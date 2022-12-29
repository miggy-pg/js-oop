// Note: You can uncomment specific line to run them in the console
// OBJECTIVE: How to check for an empty array in JavaScript

// Checking for Empty Arrays in a concise way
// myArray = [];

// Optional Chaining
// console.log(myArray?.length ? true : false);     // The optional chaining is the '?.' after the 'myArray'
                                                // This is to check if myArray exist and avoid instances that an array is undefined in some APIs
                                                // Not all occassion an array returns an array which will cause an error
// Console output:
//      false

// We can chain more than one
// myArray = [{"id": 0}];                          // We have defined an array with a JSON inside
// console.log(myArray?.[0]?.id ? true : false);    // We are first checking if 'myArray' exist then checking if the first
                                                // element of the array exist using '[0]' then check if 'id' exist
                                                // Note: when checking the 'id', when it is set to false, 0 or undefined. It will return 'false' since it is empty.
// Console output:
//      false                                   // This is because 'id' is empty or does not have any value

// Using the null coalescing operator with double question mark '??'
// console.log(myArray?.[0]?.name ?? "No name property");   // We are labeling specific result using null coalescing operator e.g "No name property"
// Console output:
//      No name property

// console.log(myArray?.[0]?.id ?? "No id property");   // We are labeling specific result using null coalescing operator e.g "No id property"
// Console output:
//      0                                       // 'No id property' will not appear because the 'id' property exist in the array


// If you need to find out if the variable is an array
// myArray_false = "Dave";
// console.log(Array.isArray(myArray_false));
// Console output:
//      false

// myArray_true = [];
// console.log(Array.isArray(myArray_true));
// Console output:
//      true

// To absolutely ensure that the variable is an array, we can have it as
// myArray = [{"id":1}];
// console.log(Array.isArray(myArray) && myArray.length ? true : false);       // We first check if the variable is an array then check if the array has a length
// Console output:
//      true

// We can also chain this again
// console.log(Array.isArray(myArray) && myArray[0]?.id ? true : false)        // We check if the variable is an array then we did not include 'myArray.length' since we know
                                                                            // that the variable is an array so we check if 'id' property exist
// Console output:
//      true

// Key Takeaways:
//      :: Using ternary operator '?', it is a condition on returning if a statement exist e.g '? true : false'   see line 15