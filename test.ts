let val : string = 'hello world'
const val1 : number= 2334;

console.log(val, `this is it ${val1}`)

interface User {
    name : string; age : number;
}

const person1 : User = {
    name : 'Aatir Nadim', age : 123,
}

class class1 {
    name : string; id : number;
    constructor(name : string, id : number) {
        this.name = name; this.id = id;
    }
}


console.log(typeof 'string')