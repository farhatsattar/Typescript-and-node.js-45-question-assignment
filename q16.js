//16. More Guests: You just found a bigger dinner table, so now more space is
//available. Think of three more guests to invite to dinner.
//16.1 • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
//bigger dinner table.
var guestArr2 = ["waheed", "Fatima", "Anaya", "Ibrahim"];
var canNotattend2 = "Ibrahim";
var newGUEST2 = "Zafar";
guestArr2[guestArr2.indexOf(canNotattend2)] = newGUEST2;
console.log(guestArr2);
guestArr2.map(function (items) {
    return console.log("Dear ".concat(items, ",i found a bigger  dinner table so i invited more people."));
});
//16.2Add one new guest to the beginning of your array.
var guestBegining = "Ibrahim";
guestArr2.unshift(guestBegining);
console.log(guestArr2);
//16.3 Add one new guest to the middle of your array.
var middleGuest = "Abdul Sattar";
var MiddleIndex = guestArr2.length / 3;
guestArr2.splice(MiddleIndex, 0, middleGuest);
console.log(guestArr2);
//16.4 Use append() to add one new guest to the end of your list.
guestArr2.push("shahida");
console.log(guestArr2);
//16.5 Print a new set of invitation messages, one for each person in your list.
guestArr2.map(function (items) {
    return console.log("Dear ".concat(items, ",you are invited in the more people list on dinner."));
});
