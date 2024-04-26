//15. Changing Guest List: You just heard that one of your guests can’t make the
//dinner, so you need to send out a new set of invitations. You’ll have to think of
//someone else to invite.

//15.1.Start with your program from Exercise 14. Add a print statement at the
//end of your program stating the name of the guest who can’t make it.

let guestArr1 :string[] = ["Ayesha","Fatima","Anaya","Nadia"];
let canNotattend1 : string = "Ayesha";
console.log(canNotattend1 + "  " ," can not attened the dinner");

//15.2 Modify your list, replacing the name of the guest who can’t make it with
//the name of the new person you are inviting.

let newGUEST1 : string = "Waheed";
guestArr1[guestArr1. indexOf(canNotattend1)] = newGUEST1;
console.log(guestArr1);

//15.3 Print a second set of invitation messages, one for each person who is still
//in your list.


guestArr1.map((items) =>
console.log(`Dear ${items} , you are invited to the dinner.`));



