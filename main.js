let add = (a,b) => a + b;
let randomNumber = Math.random(0-100);

class Person {
    constructor(name) {
        this.name = name;
    }

    greet(name) {
        
        console.log(`Hello ${this.name}`);

    }
}
