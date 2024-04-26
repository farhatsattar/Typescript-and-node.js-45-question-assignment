"use strict";
/* 44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.*/
// array as parameter
function mySandwiches(...items) {
    return `I want sandwich of ${items}`;
}
;
let collection1 = mySandwiches("ham", "cheese", "lettuce");
let collection2 = mySandwiches("turkish", "swiss");
let collection3 = mySandwiches();
console.log(collection1);
console.log(collection2);
console.log(collection3);
