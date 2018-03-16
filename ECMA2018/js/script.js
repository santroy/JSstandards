// Metody na Object

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello = function() {
    return `${this.firstName} ${this.lastName}`;
};

let person1 = new Person("Jan", "Kowalski");
let person2 = new Person("Anna", "Nowak");

let methods = {
    sayHello() {
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }
}

Object.setPrototypeOf(person1, methods); // zmiana prototypu

console.log(person1.sayHello());
console.log(person2.sayHello());

function slider(config) {
    let defaults = {
        speed: 500,
        pause: 3000,
        easing: "linear"
    };

    const options = Object.assign({}, defaults, config); // assign

    console.log(options);
}

slider({
    easing: "ease-in-out",
    pause: 1000,
    fn() {}
});

console.log(Object.is({},{})); // is
console.log(Object.is(22,22));

console.log(`Object.is(-0,+0) to ${Object.is(-0,+0)}, ale -0 === +0 to ${-0 === +0}.`);
console.log(`Object.is(NaN,NaN) to ${Object.is(NaN,NaN)}, ale NaN === NaN to ${NaN === NaN}.`);


// Arrow Functions

let getName = function() {
    return "Jan";
};

let getNameArrow = () => "Jan";
let getNameParam = (kid) => kid ? "Jaś" : "Jan";

let getObject = () => ({firstName: "Jan"});


let person = {
    firstName: "Jan",
    lastName: "Kowalski",
    sayHello() {
        return this.firstName + " " + this.lastName;
    }
}

// defaults values

const multiply = (number, multiplyBy = number * 2) => {
    return number * multiplyBy;
}

console.log(multiply(2));

// rest

const calculate = (type, ...numbers) => {

    switch(type) {
        case "sum": 
            return numbers.reduce((p, n) => p + n);
            break;
        default: return "Not supported";
    }

}

console.log(calculate("sum", 2, 1, 3));
console.log(calculate("suma", 2, 1, 3));

// spread


let numbers = [1,2,3,4,5,7,8,9,10];

let moreNumbers = [0, ...numbers, 11, 12, 13];

console.log(moreNumbers);

let sName = "Paulina";

console.log([...sName]);

// destructuring

let { firstName : dFirstName, lastName } = person;


// funckje tagujące

function tagF(strings, ...args) {

    console.log(strings);
    let output = "";

    strings.forEach((string, index) => {
        output += string;
        output += args[index];
    });

    return output;
}

let tagString = tagF`${dFirstName} Dodałeś do listy, ${lastName}`;

console.log(tagString);


// classes

class Animal {
    constructor(name) {
        if(new.target === Animal) throw new Error("You cannot create instance of abstract class!");
        this.name = name;
    }

    getSound() {
        console.log(`I'm ${this.name} and I keke`);
    }
}

class Dog extends Animal {

    constructor(name, color) {
        super(name);
        this.color = color;
    }

    getSound() {
        console.log(`I'm ${this.name} and I ${this.color}`);
    }
}
try {
    let animal = new Animal("Dog");
    animal.getSound();
} catch(e) {console.log(e)};

let dog = new Dog("Burek", "Red");
dog.getSound();

// symbols

const hidden = Symbol("Ścisle tajne");
const hidden2 = Symbol("Ścisle tajne");

let personSymbol = {

    [hidden]: "tajnehaslo"

};

console.log(personSymbol[hidden]);

// iteratory

// const it = function() {

//     let numbers = [1,2,3,4,5],
//     index = 0;

//     return {
//         next: function() {
//             return {
//                 done: (index === numbers.length) ? true : false,
//                 value: numbers[index++]
//             };
//         }
//     };
// };

// let iterator = it();

// for(let o = iterator.next(); o.done !== true; o = iterator.next()) {
//     console.log(o);
// }


let it = {

    [Symbol.iterator]() {
        let numbers = [1,2,3,4,5],
        index = 0;

        return {
            next: function() {
                return {
                    done: (index === numbers.length) ? true : false,
                    value: numbers[index++]
                };
            }
        };
    }

};

//let iterator = it[Symbol.iterator]();

// for(let o = iterator.next(); o.done !== true; o = iterator.next()) {
//     console.log(o);
// }

// for of

for (let value of it) {
    console.log(value);
}

for(let ch of "Krystian") {
    console.log(ch);
}

let lista = document.querySelectorAll(".spread-rest li");

for(let li of lista) {
    li.style.color = "#ff0000";
}

// spread na iteratorach

console.log([...it]);

// generatory

let itG = {

    *[Symbol.iterator]() {
        let numbers = [1,2,3,4,5,6];

        for(let number of numbers) {
            yield number;
        }
    }

}

//let iteratorG = itG();

for(let value of itG) console.log(value);


function *itP(number) {
    let result = (yield) + number * 2;
    console.log("druga linijka");
    yield result;
}

let iteratorP = itP(5);

console.log(iteratorP.next());
console.log(iteratorP.next(2));

// promise

