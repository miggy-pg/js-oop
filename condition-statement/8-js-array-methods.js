// OBJECTIVE: Learn 8 JS Array Methods

// // export function arrayMethod(arr) {
//     // Using the filter()
//     // const filteredItems = arr.filter((item) => {            // here we are using the filter() which will only return a single function and takes a single parameter "item"
//         // return item.price <= 100                            // we return item that are less than or equal to 100
//     // })

//     // console.log(filteredItems)
//     // Console output:
//     // 0: {name: 'Bike', price: 100}
//     // 1: {name: 'Album', price: 10}
//     // 2: {name: 'Book', price: 5}
//     // 3: {name: 'Keyboard', price: 25}
//     // length: 4

// // --------------------------------------------------------------------------------------------------------
//     // Using the map()                                         // Map allows to take 1 array and convert into a new array
//     // const itemPrice = arr.map((item) => {                   // here we are using the map() which is similar to filter()
//         // return item.price                                   // Map is super convenient on objects "{}" if you want to return only the name/price or any specific element
//     // })
//     // console.log(itemPrice)
//     // Console output:
//     //      0: 100
//     //      1: 200
//     //      2: 10
//     //      3: 5
//     //      4: 500
//     //      5: 1000
//     //      6: 25
//     //      length: 7

// // --------------------------------------------------------------------------------------------------------
//     // Using the find()
//     // const foundItem = arr.find((item) => {                   // find() will return the very first item that it finds in the array
//         // return item.name === "Book"                                   
//     // })
//     // console.log(foundItem);
//     // Console output:
//     //      name: "Book"
//     //      price: 5

// // --------------------------------------------------------------------------------------------------------
//     // Using the forEach()                                      // forEach() is similar to for-loop
//     // arr.forEach(item => {   
//         // console.log(item.name)                                  // we can print out specific element inside the array
//         // Console output:
//         //      Bike
//         //      TV
//         //      Album
//         //      Book
//         //      Phone
//         //      Computer
//         //      Keyboard
//     // });

// // --------------------------------------------------------------------------------------------------------
//     // Using the some()                                          // which is different to the other function because it will return True/False
//     // const hasInexpensive = arr.some((item) => {                 // we are checking if any element has a price that are less than or equal to 100
//         // return item.price <= 100                                // if there are no price element that is less than or equal to 100, it will return false
//     // })
//     // console.log(hasInexpensive)
//     // Console output:
//     //      true

// // --------------------------------------------------------------------------------------------------------
//     // Using the every()                                              // will check that every element is equal to the specified condition
//     // const hasInexpensiveItems = arr.every((item) => {                 // we are checking if all element has a price that are less than or equal to 100
//         // return item.price <= 100                                      // if there are no price element that is less than or equal to 100, it will return true
//     // })
//     // console.log(hasInexpensiveItems)
//     // Console output:
//     //      false

// // --------------------------------------------------------------------------------------------------------
//     // Using the reduce()
//     // reduce takes the property which we want to reduce the element into then the item
//     // in this case, the property is 'currentTotal'
//     // const total = arr.reduce((currentTotal, item) => {
//         // return item.price + currentTotal                                      
//     // }, 100)
//     // console.log(total)                                                        // 100 is the starting point which we want the currentTotal to start so it is like
//     // Console output:                                                        // so it is like we are assigning a value to the currentTotal = 100
//     //      1940                                                              // 100 is only added at the end of summing all the price (e.g 1840 + 100)
    
// }

// // --------------------------------------------------------------------------------------------------------
        // Using the includes()
// // export function includeMethod(arrItem) {                                       
//     // arrItem = [1, 2, 3, 4, 5]
//     // const includeItem = arrItem.includes(2)                     // the include() function checks if the element exist inside the array
//                                                                 // in this case, we are checking if 2 is inside arrItem list
//     // console.log(includeItem)
//     // Console output:
//     //          true
// // }

                            