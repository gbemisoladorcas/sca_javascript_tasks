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

var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);
// The result is 1

/*The reason why the result is 1 is because a=1 is a Global scope to function b and a=10 is a local scope to function b
Javascript console from the local scope to the global scope since a=10 is inside function b which can't be accessible
then it goes to the global scope which is a=1. */