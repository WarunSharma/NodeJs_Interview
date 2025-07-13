const express = require("express");

const PORT = process.env.PORT || 4001;
const app = express();

console.log('Start');

// Timer API (macro-task)
setTimeout(() => {
  console.log('setTimeout');
}, 0);

// Timer with longer delay
setTimeout(() => {
  console.log('setTimeout 100ms');
}, 100);

// Immediate callback (macrotask but runs after I/O)
setImmediate(() => {
  console.log('setImmediate');
});

// nextTick (micro-task, highest priority)
process.nextTick(() => {
  console.log('process.nextTick');
});

// Promise (micro-task)
Promise.resolve().then(() => {
  console.log('Promise.then');
});

// Async function (micro-task)
(async function() {
  console.log('Async function start');
  await Promise.resolve();
  console.log('Async function after await');
})();

// Simulate I/O task (like reading a file)
const fs = require('fs');
fs.readFile(__filename, () => {
  console.log('fs.readFile (I/O)');
});

// Fetch-like simulation using setTimeout (mimics Web API behavior)
setTimeout(() => {
  Promise.resolve().then(() => {
    console.log('Promise inside setTimeout');
  });
}, 0);

console.log('End');

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
