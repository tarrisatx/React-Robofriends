// function sing(song) {
//     console.log(song);
// }
// sing("ladd de da");
// sing("hi tee dog");
// sing("whatever");

/* 
function multiply(a, b) {
    if(a > 10 || b > 10) {
        return "thats too hard";
    } else {
        return a * b
    }
    
}
multiply(5,10); */

//Function declaration example
/* function checkDriverAge () {
    var age = prompt("What is your age?");

    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
checkDriverAge(11); */


//Function expression example
/* var checkDriverAge2 = function() {
    
    var age = prompt("What is your age?");

    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }

}
checkDriverAge2(13); */

//using return keyword
/* function checkDriverAge3 (age) {
    if (Number(age) < 18) {
        return("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        return("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        return("Congratulations on your first year of driving. Enjoy the ride!");
    } 
}

checkDriverAge3(25); */

//Loops
/* var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

var todosImportant = [
    "new clean room",
    "new brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

//foreach takes an array

function logToDos(todo, i) {
    console.log(todo, i);
}
 todos.forEach(logToDos);
 todosImportant.forEach(logToDos); */

/* todos.forEach(function(todo, i){
    console.log(todo, i);
}) */


/* for (var i=0; i < todos.length; i++) {
    //console.log(todos[i] + "!");
    //console.log(i);
    todos[i] = todos[i] + "!";
} */



//end

//Real facebook app

var database = [
    {
        username: "andrea",
        password: "supersecret"
    },
    {
        username: "tarri",
        password: "123"
    },
    {
        username: "starr",
        password: "777"
    }
];

var newsfeed = [
    {
        username: "bobby",
        timeline: "Damn gremlins!"
    },
    {
        username: "sally",
        timeline: "Who is ef hutton?"
    }
];

//check username and password
var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");


function isUserValid(user, pass) {
    for(var i = 0; i < database.length; i++) {
        if(database[i].username === user && database[i].password === pass){
            return true;
        }

    }
    return false;
}

//sign in function
function signIn(user, pass) {
    //console.log(isUserValid(user, pass))
    
    if(isUserValid(user, pass)) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username and password!")
    }
}
signIn(userNamePrompt, passwordPrompt);

//end

//objects
//exercise

/* var users = {
    username: "Tizzymack10",
    password: "Andrea23"
}

var database = [
    {
        username: "Tizzymack10",
        password: "Andrea23"
    }
];

var newsfeed = [
    {
        username: "tahara",
        timeline: "hi Tee how are you doing?"
    },
    {
        username: "andrea",
        timeline: "what it do boo!"
    },
    {
        username: "ralo",
        timeline: "what yall doing tonight?"
    }
]; */

//end





/* var user = {
    name: "Tahara",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["abrakadabra", "shazam", "boo"],
    shout: function() {
        console.log("AHHHHHH");
    }
};

var list = [
    {
    username: "andy",
    password: "1234"
    },
    {
        username: "jess",
        password: "123"
    }
] */

//var list = ["apple", "banana", "orange"];



//Arrays
//exercise 6

/* var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array
(4) ["Banana", "Apples", "Oranges", "Blueberries"]
array.shift();
"Banana"
array
(3) ["Apples", "Oranges", "Blueberries"]
array.sort();
(3) ["Apples", "Blueberries", "Oranges"]
array.concat("Kiwi");
(4) ["Apples", "Blueberries", "Oranges", "Kiwi"]
var array = ["Apples", "Blueberries", "Oranges", "Kiwi"];
undefined
array.shift();
"Apples"
array
(3) ["Blueberries", "Oranges", "Kiwi"]
array.reverse();
(3) ["Kiwi", "Oranges", "Blueberries"]
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
undefined
array2[1][1]
["Oranges"] */
//end 



//var list = ["tiger", "cat", "bear", "bird"];

/**
 list
(3) ["cat", "bear", "elephant"]
list.concat(["bee", "deer"]);
(5) ["cat", "bear", "elephant", "bee", "deer"]0: "cat"1: "bear"2: "elephant"3: "bee"4: "deer"length: 5__proto__: Array(0)
list.sort();
(3) ["bear", "cat", "elephant"]0: "bear"1: "cat"2: "elephant"length: 3__proto__: Array(0)
var myList = ["cat", "bear", "elephant", "bee", "deer"];
undefined
var myNewList = myList.concat(["monkey"]);
undefined
myList
(5) ["cat", "bear", "elephant", "bee", "deer"]
myNewList
(6) ["cat", "bear", "elephant", "bee", "deer", "monkey"]
 */

/**
 list
(4) ["tiger", "cat", "bear", "bird"]
list.shift();
"tiger"
list
(3) ["cat", "bear", "bird"]
list.pop();
"bird"
list
(2) ["cat", "bear"]
list.push("elephant");
3
list
(3) ["cat", "bear", "elephant"]
 */
/*
var numbers = [1,2,3,4]
undefined
numbers
(4) [1, 2, 3, 4]
var booleans = [true, false, true];
undefined
booleans
(3) [true, false, true]
var functionList = [function apple() {
	console.log("apple");
}]
undefined
functionList
[ƒ]0: ƒ apple()length: 1__proto__: Array(0)
mixedList = ["apples", 3, undefined, true, function apple() {
	console.log("apples");
}];
(5) ["apples", 3, undefined, true, ƒ]
*/
