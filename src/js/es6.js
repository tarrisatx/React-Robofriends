import { DH_NOT_SUITABLE_GENERATOR } from "constants";

//ES5 and ES6 - Babel will translate it for every browser

//Variables - no more using var

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
}

//use const for variable that wont change
//use let when you want to update a variable.
//you can change properties of an object but not reassgn the object itself.

// below is how you can create varibles in ES6
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

const player =  obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

// or use Destructuring like below to do the samething as a creating a variable:
const { player, experience } = obj;
let { wizardLevel } = obj;
// now I can use ' player ' anywhere in the app

/******************************************** */

//Declare Object Properties
const name = 'john wick';

const obj = {
    name: 'hello',
    [1 + 2]: 'Killers'
}

//one way would be to do it like this
const a = "Andrea";
const b = true;
const c = {};

const obj = {
    a: a,
    b: b,
    c: c
}
// a better way is to do it like this
const obj = { a, b, c }


// Template Strings uses backticks
const name = "Starr";
const age = 19;
const pet = "horse";

const greetingBest = `Hello ${name} you are ${age-10} years old. Also you like ${pet}'s`;

/********************************************** */

// default arguments

function greet(name='', age=30, pet='dog') {
    return `Hello ${name} you are ${age-10} years old. Also you like ${pet}'s`;
}

/********************************************** */

//Arrow Functions

// Old way of writing a function
function add(a, b) {
    return a + b;
}

// Now you can do the same like this
const add2 = (a, b) => a + b;

/********************************************** */

//Advanced Functions "Closures"

const first = () => {
    const greet = 'Hi' //Parent
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Currying - convert multiple functions
const multipy = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
//or I could make a func that everytime when I call it it can perform a calculation like this
//will multiply any number by 5
const multiplyBy5 = curriedMultiply(5)

//Compose - put 2 functin


//Advanced Loops

//ForEach

const array = [1, 2, 10, 16];
const double = [];
newArray = array.forEach((num) => {
    double.push(num * 2);
})
console.log('forEach', double);

//map, filter, reduce

//MAP -use this over a foreach. Both loops except map expects a return
const mapArray = array.map((num) => {
    return num * 2;
});

console.log('map', mapArray);

//FILTER 
const filterArray = array.filter((num) => {
    return num > 5;
});

console.log('Filter', filterArray);

//REDUCE - you can filter and reduce

const reduceArray = array.reduce((acc, num) => {
    return acc + num;
}, 0);

console.log('reduce', reduceArray);


const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
    /* let showusers = [];
    array.forEach(user => {
        let { username } = user;
        username = username + "!";
        showusers.push(username);
    })
    console.log('ForEach new: ', showusers); */
   //Map array 
    /* const myArray = array.map(user => {
        return user.username + "!";
    })
    console.log('Map: ', myArray); */
    //Filter Array
    /* const filterArray = array.filter(user => {
 
            return user.team === 'red';  
    })
    console.log('Filter: ', filterArray); */
    //reduce - does filter and mapping
    /* const reduceArray = array.reduce((accumulator, user) => {
        return accumulator + user.score
    }, 0);
    console.log('Reduce: ', reduceArray); */

//reference type
 



//context
//instantiation

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color) 
    }
    Sound() {
        console.log(`Moo, moo, ${this.name}! Moo, my body is ${this.color} and I'm a ${this.type}`);
    }
}

const animal1 = new Mamal('Andrea', 'cow', 'blue');
