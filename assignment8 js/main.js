// // 1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.
// import { greetUser } from "./utils.js";
// console.log(greetUser("Omar")); // Hello, Omar!

// // 2. Write a Promise that resolves after 2 seconds with the message "Task completed!". Use .then() to log the result to the console.
// const task = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Task completed!");
//   }, 2000);
// });

// task.then((message) => console.log(message));


// // 3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".
// function delay(time) {
//   return new Promise((resolve) => setTimeout(resolve, time));
// }

// async function waitAndGreet() {
//   await delay(1000);
//   return "Welcome!";
// }

// waitAndGreet().then(console.log);

// 4. Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.

// async function getUserData() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const user = await res.json();
//     console.log("Name:", user.name);
//     console.log("Email:", user.email);
//   } catch (err) {
//     console.error("Error fetching user:", err);
//   }
// }
// getUserData();



// // 5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array.
// async function getPostTitles() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();
//   return posts.slice(0, 3).map(post => post.title);
// }

// getPostTitles().then(console.log);


// // 6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.
// function timer() {
//   let count = 1;
//   function tick() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(count);
//         resolve();
//       }, 1000);
//     });
//   }

//   (async function run() {
//     while (count <= 3) {
//       await tick();
//       count++;
//     }
//   })();
// }

// timer();

// // 7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.
// function safeJSONParse(str) {
//   try {
//     return JSON.parse(str);
//   } catch (error) {
//     console.error("Invalid JSON:", error.message);
//     return null;
//   }
// }

// console.log(safeJSONParse('{"name": "Omar"}'));  
// console.log(safeJSONParse('{name: Omar}'));     

// // 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.
// async function getCompletedTodosCount() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
//   const todos = await res.json();
//   return todos.filter(todo => todo.completed).length;
// }

// getCompletedTodosCount().then(count => console.log("Completed todos:", count));

// 9. Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.
import DataFetcher from "./DataFetcher.js";

const fetcher = new DataFetcher();
fetcher.getUser(1).then(user => console.log(user));
