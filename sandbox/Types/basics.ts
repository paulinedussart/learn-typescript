import { type } from "os";

console.log('Learn types');
/* The core primitive types in TypeScript are all lowercase!
    - number (float, integers), 
    - string
    - boolean
    - object

    TS only help during development before compiling TS to JS

    JS is dynamically typed (types checking at runtime)
    TS is static typed (types checking during developement)

    Type Inference
    Try his best to understand the type of a value/constant
*/

const add = (n1: number, n2: number, showResult: boolean, textResult: string) => {
    const calcul = n1 + n2;
    if (showResult) {
        console.log(textResult + calcul)
    } else {
        return calcul
    }
};
/*
    TYPE INFERENCE
    TS try his best to understand the type of a value/constant
*/
let number1: number;
number1 =  4
const number2 = 5.2;
const showResult = true;
// This synthax allow to not initializing the type, but setting it on our on, it's not type inference
let textResult = "The Result is ... "
add(+number1, +number2, showResult, textResult)