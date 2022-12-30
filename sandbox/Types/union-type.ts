//Type Alias 
type Combinable = number | string
type StringLiteralConversion =  "as-number" | "as-text"
type User = { name: string; age: number };
const user1: User = { name: 'Max', age: 30 };

// Union Types
function combine(number1: Combinable, number2: Combinable) {
  let result
  if (typeof number1 == "number" && typeof number2 == "number" ) {
   result = number1 + number2
  } else {
    result = number1.toString() + number2.toString()
  }
  return result
}
const combinedResult1 = combine(11, 5)
const combinedResult2 = combine("Stranger", "Things")


// String Literal Types : a type that accepts a specified string literal.

const combineLiteralTypes = (
  number1: number |string, 
  number2: number | string, 
  resultConversion: StringLiteralConversion) => {
    let result
    if (typeof number1 == "number" && typeof number2 == "number" ) {
    result = number1 + number2
    } else {
      result = number1.toString() + number2.toString()
    }
    if (resultConversion === 'as-number') {
      return +result;
    } else {
      return result.toString();
    }
}

const combinedAges = combineLiteralTypes(30, 26, 'as-number');
const combinedStringAges = combineLiteralTypes('30', '26', 'as-number');
const combinedNames = combineLiteralTypes('Max', 'Anna', 'as-text');

