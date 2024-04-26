//15. Changing Guest List: You just heard that one of your guests can’t make the
//dinner, so you need to send out a new set of invitations. You’ll have to think of
//someone else to invite.
//15.1.Start with your program from Exercise 14. Add a print statement at the
//end of your program stating the name of the guest who can’t make it.
var guestArr1 = ["Ayesha", "Fatima", "Anaya", "Nadia"];
var canNotattend1 = "Ayesha";
//console.log(canNotattend + "  " ," can not attened the dinner");
//15.2 Modify your list, replacing the name of the guest who can’t make it with
//the name of the new person you are inviting.
var newGUEST1 = "Waheed";
guestArr1[guestArr1.indexOf(canNotattend1)] = newGUEST1;
console.log(guestArr1);
//15.3 Print a second set of invitation messages, one for each person who is still
//in your list.
guestArr1.map(function (items) {
    return console.log("Dear ".concat(items, " , you are invited to the dinner."));
});
