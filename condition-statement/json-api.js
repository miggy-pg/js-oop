// OBJECTIVE: Learn how to work with JSON and APIs in JavaScript
                                                    // Definition:
                                                        // The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
                                                        // With 'asynchronous' programming, JavaScript programs can start long-running tasks, and continue running other tasks in parallell.

export async function getISS(api_url) {                 // for simpler explanation, 'async' makes a function return a Promise
    const response = await fetch(api_url);              // Take note that 'async' is needed when using 'await'. Since we have defined 'async' in the function name. We are able to use 'await' on this line
    const data = await response.json();                 // We want to convert the API data into JSON object by using 'json()'
    const { latitude, longitude } = data;               // If we want to return specific element from the JSON, we can define the element inside an Object '{}' and set the data
    console.log(data);                                  
    console.log(latitude);
    console.log(longitude);
}