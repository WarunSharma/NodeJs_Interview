const express = require("express");
const { Worker } = require("worker_threads");
// const calculateCount = require('./1_promise');

const PORT = process.env.PORT || 4001;
const THREAD_COUNT = 4;
const app = express();

function workerData() {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./src/3_four_workers.js", {
      workerData: { thread_count: THREAD_COUNT },
    });
    worker.on("message", (data) => {
      resolve(data);
    });
    worker.on("error", (err) => {
      reject(`An error occured ${err}`);
    });
  });
}

app.get("/blocking", async (req, res) => {
  const workerPromises = [];
  for (let i = 0; i < THREAD_COUNT; ++i) {
    workerPromises.push(workerData());
  }

  const threadResults = await Promise.all(workerPromises);
  console.log(threadResults);
  const counter =
    threadResults[0] + threadResults[1] + threadResults[2] + threadResults[3];
  res.send(`Counter is ${counter}`);
});

app.get("/non-blocking", (req, res) => {
  res.send(`Non blocking request`);
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
