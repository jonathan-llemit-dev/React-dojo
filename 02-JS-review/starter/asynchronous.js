// Asynchronous Javascript

// promises
// js process is synchronous line by line of code and when the process of a certain line takes time before producing an intended output -
// it will be skipped and will proceed on reading the next line of code.
// this kind of instance of code is called promise
// when a promise statement finished loading/processing, we can execute a certain operation or function after it -
// by using .then() method and then method can be chained
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log("other process");

// async/await
// async function should be created in order to put an await property inside it
// await property makes a certain line of code of promise just like normal code means js will wait for it to finished processing -
// before proceeding into next line.
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);

  return data;
}

const todos = getTodos();
console.log(todos);

console.log("other process!!!");
