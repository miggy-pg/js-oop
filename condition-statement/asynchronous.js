// OBJECTIVE: Learn Asynchronous in JavaScript so we understand how to fetch external APIs

async function getTodos() {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await todos.json();
  // console.log(data);

  return data;
}

const todos = getTodos();
console.log(await todos);
