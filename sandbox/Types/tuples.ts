import { StringifyOptions } from "querystring"

/* UNION TYPE
    TS allow to defined a variable with different types :  it's called union types
*/
let code: (string|number)
code = "ruby"
code =  34

let today: number|string
today = "good"
today = 12

// Also for function parameter
const test = (key: ( number | string ))  => console.log(key) 
function test2 (key: ( number | string )) { console.log(key) }

/* TUPLE TYPE
    JS normal array 
    TS special construct to tell I want this array with the exact same length and exact type element position 
    instead it will raise an error
*/
const me4: {
    name: string;
    // here
    key: [number, string, number, string];
} = {
    name: "Pau",
    key: [1, "me", 2, "you"], 
}
// this is NOT allowed
me4.key[4] = 3 // key has only 4 elements
me4.key[1] = 3 // we waiting a string

// allowed because TS can't catch this error  
me4.key.push("great")