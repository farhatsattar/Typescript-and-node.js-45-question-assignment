//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// 24.1 Tests for equality and inequality with strings
let name_1 : string = "farhat"
let name_2 : string = "farhat sattar"
let name_3 : string = "Dr. farhat sattar"

if (name_1 == name_3){console.log("names are equal")

} else{console.log("names are not equal")}

if(name_1 != name_2){console.log("names are equal")}

//24.2 Tests using the lower case function

if(name_1 != name_3){console.log("names are equal")}

//24.3  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age_1 : number = 18
let age_2 : number = 22
if (age_1 == 18){
    console.log("eligible for vote")

}
if(age_1 != 22){
    console.log("eligible for vote in older category")
}
if(age_1 <= age_2){
    console.log("younger")
}

if(age_2 >= age_1){
    console.log("older")
}

//24.4  Tests using "and" and "or" operators
if(age_1 == 18 && age_2 == 22){
    console.log("person is eligible for vote")
}
if(age_1 == 18 || age_2 != 22){
    console.log("person is not eligible for vote")}

   //24.5 Test whether an item is in a array
let country : string[] = ["Pakistan","Turkey","China","Japan"]

if (country.includes("Pakistan")){
    console.log("Pakistan is in country list")
}
//24.6 Test whether an item is not in a array
if (!country.includes("America")){
    console.log("America is not included in an array")
}
