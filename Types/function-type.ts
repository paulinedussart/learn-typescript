// Type return 
const multiply = (number1: number, number2: number): number => {
  return number1 * number2 
}

// Here the function does not have a return statement, the return result is equal to void
const printResult1 = (num: number) : void => {
  console.log("Resutlt :", num)
}
// Here with undefined, TS expect a return statement but whitout value
const printResult2 = (num: number): undefined => {
  console.log("Resutlt :", num)
  return;
}

printResult1(multiply(3, 4))

// let multiplyFunction: Function
// Be more precise
let multiplyFunction: (a: number, b: number) => number
// we say to TS that now this function should accept any Fn with 2 argt number

multiplyFunction = multiply
// multiplyFunction = printResult1 // will return undefined

console.log(multiplyFunction(4,6))

const typeFnCallback = (n1: number, n2: number, callback: (num: number) => void) => {
  const result = n1 + n2
  callback(result)
}

const typeFnCallbackResult = typeFnCallback(3, 4, (res) => {
  console.log(res)
} )
