"use strict";
/*37. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.*/
function make_shirt(size = 'large', text = 'I love typescript') {
    console.log(`you have order a ${size}, shirt that says ${text}`);
}
make_shirt();
make_shirt('medium');
// different message
make_shirt('small', 'i need a big shirt to wear.');
