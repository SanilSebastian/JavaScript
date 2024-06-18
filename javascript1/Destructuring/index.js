// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring
//                 5 examples

// --------------------- EXAMPLE 1 ---------------------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);

// --------------------- EXAMPLE 2 ---------------------
// SWAP 2 ELEMENT IN AN ARRAY

const colors = ["red","green","blue","black","white"];

[colors[0],colors[4]]=[colors[4],colors[0]];

console.log(colors);

//--------------------- EXAMPLE 3 ---------------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors1 = ["red","green","blue","black","white"];

const [firstcolor, secondcolor, thirdcolor, ...extracolors]=colors;

console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extracolors);

//--------------------- EXAMPLE 4 ---------------------
// EXTRACT VALUES FROM OBJECTS

const person1={
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: 34,
}

const person2={
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
    job: "Unemployed",
}

const {firstName, lastName, age, job="Unemployed"}=person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.job);

//--------------------- EXAMPLE 5 ---------------------
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job}){
    console.log(`name:${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person3={
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}

const person4={
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

displayPerson(person3);
displayPerson(person4);