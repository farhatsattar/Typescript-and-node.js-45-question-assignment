/*41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.*/
var magicianNames = ["ali", "ahmad", "hasan", "ayan"];
function show_magicians() {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var magicianName = magicianNames_1[_i];
        console.log(magicianName);
    }
}
;
show_magicians();
