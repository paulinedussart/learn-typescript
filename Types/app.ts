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