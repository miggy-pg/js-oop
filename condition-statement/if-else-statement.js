// OBJECTIVE: Learn If-Else statement

// conditionStatement(8, 6)
export function conditionStatement(num1, num2) {
    // We are testing the 'if-statement' without the curly brackets and found out the 'if-else' statement is only good for 1 condition only
    // adding another 'console.log' in the else statement will disregard any statements after the first line/condition (e.g console.log("yeee") in this given example)

    // if(num1 > num2)                              // we can remove the curly bracket '{}' if we only have 1 condition else we have to define it similar to 
    //     console.log("num1 is greater")           // this block of "if-statement" line 5-10
    // else 
    //     console.log("num2 is greater");
    //     console.log("yeee");

    // Console Output:
    //      num1 is greater
    //      yeee
    

    // Since we have added curly brackets in this statement, we are assuring that the 'else' condition consider multiple statements
    if(num1 > num2) {                       
        console.log("num 1 is greater")
    }
    else {
        console.log("num2 is greater");
        console.log("yeee");
    }
    // Console Output:
    //      num1 is greater
    
}

// conditionTriStatement(2, 6, 8)
export function conditionTriStatement(num1, num2, num3) {
    if(num1 > num2 && num1 > num3)                       
        console.log("num 1 is greater");
    else if(num2 > num1 && num2 > num3) 
        console.log("num2 is greater");
    else
        console.log("num3 is greater");

    // Console Output:
    //  num3 is greater
}