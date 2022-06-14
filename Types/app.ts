console.log('Learn types');
/* The core primitive types in TypeScript are all lowercase!
    - number (float, integers), 
    - string
    - boolean 

    TS only help during development before compiling TS to JS
    JS is dynamically typed (resolved at runtime)
    TS is static typed (set during developement)
*/

const add = (n1: number, n2: number, showResult: boolean, textResult: string) => {
    const calcul = n1 + n2;
    if (showResult) {
        console.log(textResult + calcul)
    } else {
        return calcul
    }
};

const number1 = 3.4;
const number2 = 5.2;
const showResult = true;
const textResult = "The Result is ... "
add(+number1, +number2, showResult, textResult)