// Type return 
const mutliply = (number1: number, number2: number): number => {
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


printResult1(mutliply(3, 4))