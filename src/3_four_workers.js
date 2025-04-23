/*
Visit the http://localhost:3000/blocking tab again in your web browser. Before it finishes loading, refresh all http://localhost:3000/non-blocking tabs. You should now notice that they are loading instantly without waiting for the /blocking route to finish loading. This is because the CPU-bound task is offloaded to another threads, and the main thread handles all the incoming requests.
*/

const { workerData, parentPort } = require("worker_threads");

let counter = 0;
for (let i = 1; i < 20000000000 / workerData.thread_count; ++i) {
  counter++;
}

console.log(counter);

parentPort.postMessage(counter);
