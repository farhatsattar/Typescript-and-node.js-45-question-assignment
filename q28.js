"use strict";
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//28.1 If the person is less than 2 years old, print a message that the person is a baby.
let age = 1;
if (age < 2) {
    console.log("person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("person is toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("person is  a adult.");
}
else {
    console.log("person is an elder.");
}
//28.2  If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
/*let age : number = 3;
if(age < 2){
    console.log("person is a baby.");
}else if(age >=2 && age < 4){
    console.log("person is toddler.");
} else if( age  >=4 && age< 13){
    console.log("person is a kid.");
} else if(age >=13 && age <20){
    console.log("person is a teenager.");
}else if(age >=20 && age < 65){
    console.log("person is  a adult.");
} else {
    console.log("person is an elder.");
}

//28.3  If the person is at least 4 years old but less than 13, print a message that the person is a kid.

let age : number = 11;
if(age < 2){
    console.log("person is a baby.");
}else if(age >=2 && age < 4){
    console.log("person is toddler.");
} else if( age  >=4 && age< 13){
    console.log("person is a kid.");
} else if(age >=13 && age <20){
    console.log("person is a teenager.");
}else if(age >=20 && age < 65){
    console.log("person is  a adult.");
} else {
    console.log("person is an elder.");
}

//28.4 the person is at least 13 years old but less than 20, print a message that the person is a teenager.

let age : number = 16;
if(age < 2){
    console.log("person is a baby.");
}else if(age >=2 && age < 4){
    console.log("person is toddler.");
} else if( age  >=4 && age< 13){
    console.log("person is a kid.");
} else if(age >=13 && age <20){
    console.log("person is a teenager.");
}else if(age >=20 && age < 65){
    console.log("person is  a adult.");
} else {
    console.log("person is an elder.");
}

//28.5 • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

/*let age : number = 55 ;
if(age < 2){
    console.log("person is a baby.");
}else if(age >=2 && age < 4){
    console.log("person is toddler.");
} else if( age  >=4 && age< 13){
    console.log("person is a kid.");
} else if(age >=13 && age <20){
    console.log("person is a teenager.");
}else if(age >=20 && age < 65){
    console.log("person is  a adult.");
} else {
    console.log("person is an elder.");
}*/
//28.6 • If the person is age 65 or older, print a message that the person is an elder.
/*let age : number = 95;
if(age < 2){
    console.log("person is a baby.");
}else if(age >=2 && age < 4){
    console.log("person is toddler.");
} else if( age  >=4 && age< 13){
    console.log("person is a kid.");
} else if(age >=13 && age <20){
    console.log("person is a teenager.");
}else if(age >=20 && age < 65){
    console.log("person is  a adult.");
} else {
    console.log("person is an elder.");
}*/ 
