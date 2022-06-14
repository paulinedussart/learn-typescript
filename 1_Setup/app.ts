/* 
    Use "!" to specify that I'm sure this element exist
*/
let input1 = document.getElementById('num1')! as HTMLInputElement;
const button = document.querySelector("button");
/* 
    - To be able to read the .input prop
    .getElementById('input1') return a HTMLElement which doesn't have a value props
    HTMLInputElement have one
*/
let input2 = document.getElementById('num2')! as HTMLInputElement;
let value = input2.value 

/* 
    We tell to typescript compiler that num1 and num2 are number type of
*/
function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});

/*
    If I run tsc index.ts, a index.js file will be created
*/
export {};