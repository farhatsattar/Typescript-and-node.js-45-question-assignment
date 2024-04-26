var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//18. Seeing the World: Think of at least five places in the world you’d like to visit.
//18.1 Store the locations in a array. Make sure the array is not in alphabetical order.
var placesTovisit = ["Turkey", "Pakistan", "China", "Japan", "Iran"];
//18.2 Print your array in alphabetical order without modifying the actual list.
console.log("original order :", placesTovisit);
//18.3 Show that your array is still in its original order by printing it.
console.log("Alphabetical order:", __spreadArray([], placesTovisit, true).sort());
//18.3 Show that your array is still in its original order.
console.log("Original order after sotring:", placesTovisit);
//18.4 Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", __spreadArray([], placesTovisit, true).sort().reverse());
//18.5 Show that your array is still in its original order by printing it again.
console.log("Original order after reverse sorting:", placesTovisit);
//18.6 Reverse the order of your list. Print the array to show that its
//order has changed.
placesTovisit.reverse();
console.log("Reversed order:", placesTovisit);
//18.7 • Reverse the order of your list again. Print the list to show it’s back to its original order.
placesTovisit.reverse();
console.log("Back to original order:", placesTovisit);
//18.8 • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placesTovisit.sort();
console.log("sorted in alphabetical order:", placesTovisit);
//18.9 • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placesTovisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order", placesTovisit);
