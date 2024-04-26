/*42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.*/
var magicianNames1 = ["ali", "ahmad", "hasan", "ayan"];
function show_magicians1(greet) {
    for (var _i = 0, magicianNames1_1 = magicianNames1; _i < magicianNames1_1.length; _i++) {
        var item = magicianNames1_1[_i];
        console.log(greet, item);
    }
}
;
show_magicians1("Hello , How are you Mr.");
