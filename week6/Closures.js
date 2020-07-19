 /*A closure in JavaScript is also known has JavaScript closure.
 It makes it possible for a function to have "private" variables. 
 The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
 A closure is a function having access to the parent scope, even after the parent function has closed.
 JavaScript variables can belong to the local or global scope.
 Global variables can be made local (private) with closures. */

var a = 1;
function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  a = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

console.log(firstResult(2));

//The result is 5