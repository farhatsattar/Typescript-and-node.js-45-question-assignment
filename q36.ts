/*36. T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function.*/

function make_shirt(size : number , text : string){
   // return size + text;

    return`My shirt size is ${size} and text is ${text}`;
    
}

let my_function = make_shirt(36 , " Help! palestine.");
console.log(my_function);
