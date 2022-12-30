let userInput: unknown
let userName: string

userInput = 4
userInput = "Pau"

// userName = userInput --> error
// Need type checking

if (typeof userInput === "string"){
  userName = userInput
} 


// this Fn will always crash so never return a value
const generateError = (message: string, code: number): never => {
  throw {message: message, errorCode: code}
}

generateError("An error has occurred", 500)