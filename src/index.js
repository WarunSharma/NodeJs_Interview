const express = require('express');
const {exec, execFile, spawn, fork} = require('child_process');
const path = require('path');
const { fileURLToPath } = require('url');
const { dirname } = require('path');

const PORT = process.env.PORT || 4001;
const app = express();

/*
Here are short notes on Child Process in Node.js – perfect for interviews and revision:

✅ Why use Child Processes in Node.js?
Node.js is single-threaded (event loop-based).

For CPU-intensive or parallel tasks, we can create separate processes using child_process module.

🔑 Key Methods in child_process module
Method	Description	Use Case
exec()	Runs a command in a shell, buffers output	Shell commands (ls, git, etc.)
execFile()	Runs an executable directly	Safer, faster than exec for fixed files
spawn()	Starts a process with streaming support	Handle large outputs, real-time logs
fork()	Spawns a Node.js child process with IPC	Worker threads, inter-process messaging
*/

// exec
// exec('ls -lh', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`error: ${error.message}`);
//     return;
//   }

//   if (stderr) {
//     console.error(`stderr: ${stderr}`);
//     return;
//   }

//   console.log(`stdout:\n${stdout}`);
// });

// app.listen(PORT, () => {
//     console.log(`Server started at ${PORT}`);
// })

// execFile
// const fileProcessorPath = path.resolve(__dirname, 'execFileProcessor.js');
// execFile('node', [fileProcessorPath], (error, stdout, stderr) => {
//     if (error) {
//       console.error(`error: ${error.message}`);
//       return;
//     }
  
//     if (stderr) {
//       console.error(`stderr: ${stderr}`);
//       return;
//     }
  
//     console.log(`stdout:\n${stdout}`);
// });

// spawn
// const spawnedChild = spawn('find', ['.']);
// spawnedChild.stdout.on('data', (data) => {
//   console.log(`stdout:\n${data}`);
// });

// spawnedChild.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// spawnedChild.on('error', (error) => {
//   console.error(`error: ${error.message}`);
// });

// spawnedChild.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

// fork
// const forkProcessorPath = path.resolve(__dirname, 'forkProcessor.js');
// const forkedChild = fork(forkProcessorPath);
// forkedChild.on('message', (msg) => {
//     console.log('Message from data processor exchange', msg);
// });
  
// forkedChild.send({ hello: 'world' });