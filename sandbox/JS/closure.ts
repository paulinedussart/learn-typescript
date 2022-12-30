// A interne Fn created and returned inside an externe Fn
// the interne Fn have access to the variable/parameter of externe Fn even if the execution is finished

const multiply = (number_1: number) => {
    return (number_2) => {
       console.log(number_1 * number_2)
    }
}

const closure = multiply(3)
closure(4)

// use node file_name to dipslay result