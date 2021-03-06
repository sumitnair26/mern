/*
let heading = document.querySelector('h1');
heading.innerText = "Changed text";

console.log(document.URL);

window.localStorage.setItem('test','local storage');


window.localStorage.removeItem('test');
*/

/*
creates windoes object on using war
var n = 'sumit';

n = 'nair';

alert(n);

window.n
*/
/*
let n1 = 'sumit1';

n1 = 'nair2';

alert(n1);

*/
/*
if(true){
    let n2 = "nair2";

}

alert(n2); //will give error in console as it cant be used with windows
// n2 is not defined
*/

/*
const n4 = "Sumit";

n4 = "Nair"

alert("n4");// will give error as it is values in const cant be overriden.
// TypeError: Assignment to constant variable.
*/

/*
const n4 = "Sumit";

n4 = "Nair";

    alert("n4")
*/


/*
const obj = {
    name : "Sumit"
}

obj.name = "Somu"
console.log(obj.name);
*/

/*** Template String *****/

/*
let fname = "Sumit";
let lname ="Somu";
let age = prompt("Guess Sumit Age ..");

/*
//old way

let result = fname + " " + lname + " is " + age + " years old";
alert(result); */

/*
let result = `${fname} ${lname} is ${age} years old`;
alert(result);

*/

/****** Functions  ********/

/*
function welcome(
    user = "Default User" ,
    message = "Default message, ...."

    ) {
    alert(`Helo ${user}, ${message}`);
}

welcome(); //will take default value


function greeting(message) {
    alert(`${message} everyone`);
}

greeting("Hello");
*/
/*** Arrow Function ****/

//one line function declaration
// if only one argument, no need ()
// () is needed for multiple arguments or no arguments
// no need to write return keyword for enturing one statement
// return keyword is needed for multiple statements

/*
let greeting = (message) => alert(`${message} everyone`);

greeting("Hello");
*/

/*
let createBlog = (title, body) => {
    if(!title) {
        throw new Error("A title is needed");
    }
    if(!body) {
        throw new Error("Body can't be empty");
    }
    return `${title} - ${body}`;
};

alert(createBlog("A new blog", "Some Text in my Blog"));
*/

/**** This ******/

/* We should not use this with arrow function
 As it will not work
*/
/*
let india = {
    cities: ["Jabalpur","Bhopal","Indore"],
    printWithDash: function () {
        alert(this.cities.join(" - "));
    }
}

india.printWithDash();
*/

/**** Destructuring Objects *****/

/*
let thingsToDo = {
    morning : "Exercise",
    afternoon: "Work",
    evening:"Code",
    night : ["Sleep", "Dream"],
}

let {morning, afternoon, evening, night} = thingsToDo;

morning= "Run";
console.log(night);
*/

//destruturing function arguments
// passing an object as function arguments

/*
const uniStudents = ({ fname, lname }) => {
    //let { fname, lname } = student;
    console.log(`${fname} ${lname} is from university of RGPV`);
}

uniStudents({
    fname:"Sumit",
    lname:"Nair"
})
*/

/*** Destructuring array ***/
/*
const [,secondOne] = ["one", "two", "three"];

console.log(firstOne); */

/***** Spreed Operator (...) *****/

/*
const madhayaPradheshCities = ["Jabalpur","Bhopal","Indore"];
const KarnatakaCities = ["Bangalore","Mysure","KGF"];

const allCities = [...madhayaPradheshCities, ...KarnatakaCities];

console.log(allCities);

console.log(allCities.join(", "));
*/

/****  Rest Operator  ****/

/*
const cities = ["Jabalpur","Bhopal","Indore"];
cities.push('Sagar');
const [first, ...rest] = cities;

console.log("First=>", first);
console.log("Rest =>", rest);


const user = {
    name : "Sumit",
    email:"sumit.nair@x.com",
    password : "Will not send"
}


const {password, ...rest } = user;

console.log(rest);
*/

/****** Function and prototype *******/

/*
function Holiday(destination, days) {
    this.destination = destination;
    this.days = days;
}

Holiday.prototype.info = function () {
    console.log(`${this.destination} | ${this.days}`)
}

const nepal = new Holiday("Nepal", 30);

const australia = new Holiday("australia", 15);

console.log(nepal);

console.log(australia);
*/

/*** Classes ***/
/** New Javascript */

/*
class Holiday {
    //constructor functon automatically runs each time
    // a new instance of holidat is creates usinf new keyword
    constructor(destination, days) {
        this.destination = destination;
        this.days = days;
    }
    info() {
        console.log(`${this.destination} will take ${this.days} days.`);
    }
}

const trip = new Holiday("Manali, Himachal", 15);

console.log(trip.info());
console.log(Holiday.prototype);

const trip2 = new Holiday("Kochi, Kerala", 15);
console.log(trip2.info());
*/
class Holiday {
    //constructor functon automatically runs each time
    // a new instance of holidat is creates usinf new keyword
    constructor(destination, days) {
        this.destination = destination;
        this.days = days;
    }
    info() {
        console.log(`${this.destination} will take ${this.days} days.`);
    }
}

class Expedition extends Holiday {
    //gear is added
    constructor(destination, days, gear) {
        //call the super class constructor and pass the name parameter
        super(destination, days);
        this.gear = gear;
    }
    info() {
        super.info();
        const[camera, ...rest] = this.gear;
        console.log(`Bring ${rest} and ${camera}`);
    }
}

const travel = new Expedition(
    "Everest","30", ["Sunglasses","Camera","Beer","Some more items"
]);

travel.info();