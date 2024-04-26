"use strict";
//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName1 = "Zafar";
// lower case
console.log(personName1.toLowerCase());
// upper case
console.log(personName1.toUpperCase());
// title case
console.log(personName1.charAt(0).toUpperCase() + personName1.slice(1, 5));
