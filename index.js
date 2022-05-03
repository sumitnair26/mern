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

function welcome(
    user = "Default User" ,
    message = "Default message, ...."

    ) {
    alert(`Helo ${user}, ${message}`);
}

welcome(); //will take default value

