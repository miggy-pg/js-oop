// OBJECTIVE: An alternative on SWITCH statement by using a object with key-value pair.

export function switchAlternative(extension){
    // One alternative option on not using SWITCH statement is using an Object "{}"
    const extensionObj = {
        ".css": "text/css",
        ".js": "text/javascript",
        ".json": "application/json",
        ".jpg": "image/jpeg",
        ".png": "image/png",
        ".txt": "text/plain",
    }
    console.log(extensionObj[extension] || "text/html")         // we are assigning a default value "text/html" if the specified 'extension' is does not exist

}

export function switchMapAlternative(extension){
    // Second alternative option on not using SWITCH statement is using Map()
    const myMap = new Map();
    myMap.set(".css", "text/css")
    myMap.set(".js", "text/javascript")
    myMap.set(".json", "application/json")
    myMap.set(".jpg", "image/jpeg")
    myMap.set(".png", "image/png")
    myMap.set(".txt", "text/plain")

    console.log(myMap.get(extension) || "text/html")
    console.log(myMap.size)
}

// Visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// Key takeaways:
//      :: A Map's keys can be any value (including functions, objects, or any primitive).
//      :: A Map does not contain any keys by default. It only contains what is explicitly put into it.
//      :: A Map has a size which will return the number of items in a Map easily using the 'size' property.
//      :: A Map is an iterable, so it can be directly iterated.
//      :: A Map performs better in scenarios involving frequent additions and removals of key-value pairs.
//      :: In Map, no native support for serialization or parsing (but you can build your own serialization and parsing support for Map by using
//          JSON.stringify() with its replacer argument, and by using JSON.parse() with its reviver argument).
//      :: The keys of an Object must be either a String or a Symbol.