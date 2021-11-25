console.log("Sending request to server");
/* from MDN
setTimeout() method sets 
a timer which executes a 
function or sepcified piece of code
once the timer expires */
setTimeout(() => {
    console.log("Here is your data from server");
}, 3000)
// JS is not going to hog the execution of 
// this following code for 3 seconds
console.log("I am at end of file");
// it will run like this
// Sending request to server
// I am at end of file
// ... waits 3 secs ...
// Here is your data from server
// BUT WHY??
// turns out it's the gosh darn browser not js
// js hands off certain tasks to the browser to take care of
// browsers come with web APIs that 
// are able to handle certain tasks
// in the background 
// js call stack recognizes these API functions 
// and passes them off to browser
// once browser is done with these tasks
// the return and are pushed 
// onto the stack as callback
// works with setTimeout() and making requests 

console.log("I print first");
setTimeout(() => {
    console.log("I print after 3 seconds");
}, 3000);
console.log("I print second");