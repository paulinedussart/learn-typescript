const me = {
    name: "Pauline", 
    age: 27
}

/*
    Here we have keys types pair 
    const me = {
        name: string;
        age: number;
    }
*/

const me2: object =  {
    name: "Pauline", 
    age: 27
}
/*
    TS doesn't know any proppertu types 
    const me2: object
*/

const me3: { 
    name: string;
    age: number; 
} =  {
    name: "Pauline", 
    age: 27
}

const me4: {
    name: string,
    username: string[],
    age: number,
    address: {
        city: string,
        zipcode: number,
    }
} = {
    name: "Pau",
    username: ["Duss", "Paulin"],
    age: 27,
    address: {
        city: "BARCELONNETTE",
        zipcode: 59970,
    }
}
