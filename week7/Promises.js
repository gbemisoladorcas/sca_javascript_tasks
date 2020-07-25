/* 1.
Promises are used to handle asynchronous operations in JavaScript. 
They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
Promises are the ideal choice for handling asynchronous operations in the simplest manner.
 They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events.

 2.
 Synchronous code is executed in sequence each statement waits for the previous statement to finish before executing.
 Asynchronous code doesn't have to wait your program can continue to run. 

 3.
  Synchronous code sample:
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('You clicked me!');

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});

Asynchronous code sample:
  const networkRequest = () => {
  setTimeout(() => {
    console.log('Async Code');
  }, 200);
};
 console.log('Hello World');
 networkRequest();
 console.log('The End');

 4.
 The ways to deal with Asynchronous Code in JavaScript are:
 1) Callbacks:
     This allow you to provide a function to be executed after the asynchronous code has finished.

 2) Promises:
     The main problem with callbacks is, when chaining a number of function calls together it can become increasingly difficult to follow the flow of execution.
     Promises solve this issue by allowing you to chain together promises using the .then() syntax.

 3) Async or Await:
     This provides a cleaner method of writing promises and gives the user more control over execution order.*/