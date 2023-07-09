// OBJECTIVE: Learn short-circuiting that can be used as an alternative to IF conditions

// IN THIS FILE, INSTALL QUOKKA EXTENSION AND RUN IT USING CTRL+SHIFT+P 'Select Run Quokka on this Script'

// End-operator short circuits when they first operate
// So, when the first value is `False`, it will return the first value
// else if the first value is `True`, it will return the second value

// =====================================================================================
// AND OPERATOR (&&)
// =====================================================================================
// Example:
console.log(true && "Some string");
// Output: Some string;
// : this is because the first value boolean 'true' is True

console.log(false && "Some string");
// Output: false;
// : this is because the first value boolean 'false' is False so it won't return the second value 'Some string'

// THIS CAN ALSO BE APPLIED IN FALSY AND TRUTH VALUES
// ----
// TRUTH values: any values that are not false, hence they exist
// ----
// FALSY values: 0, undefined, null, false, ''

// Example:
console.log("jonas" && "Some string");
// Output: Some string
//  : we get the second value `Some string` because the first value `jonas` is a string and is not empty

console.log(false && "Some string");
// Output: false
// : we get the first value `false` because the first value is False

console.log("" && "Some string");
// Output: empty string
// : we get the first value because it is a FALSY values

// =====================================================================================
// OR OPERATOR (||)
// =====================================================================================
// OR operator works the opposite way. Specifically, when the first value is TRUE, it will return it.
// We can use OR operator to set default values

// Example:
console.log(true || "Some string");
// Output: true
// : since the first value is true, it wont look at the second value `Some string`

console.log(false || "Some string");
// Output: Some string
// : since the first value is false, it will look at the second value `Some string`

// THERE ARE CERTAIN CASES THAT 0 VALUES ARE TREATED AS FALSY VALUES EVEN THEY ARE CONSIDERED NUMERICAL DATA. TO FIX THIS, WE CAN USE `NULLISH COALESCING OPERATOR`
// =====================================================================================
// NULLISH COALESCING OPERATOR
// - will only return the second value when the second value is null or undefined
// =====================================================================================
// Example:
const count = 0 ?? "no data";
console.log(count);
// Output: 0
// : returns the first value because it will not treat 0 as falsy values

console.log(undefined ?? 0);
