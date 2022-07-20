// Union Types is equal to : |

function combine(number1: number |string, number2: number | string) {
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

console.log(combinedResult1)
console.log(combinedResult2)


// Literal Types

function combineLiteralTypes(number1: number |string, number2: number | string, resultConversion: "as-number" | "as-text") {
  let result
  if (typeof number1 == "number" && typeof number2 == "number" ) {
   result = number1 + number2
  } else {
    result = number1.toString() + number2.toString()
  }
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combineLiteralTypes(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combineLiteralTypes('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combineLiteralTypes('Max', 'Anna', 'as-text');
console.log(combinedNames);