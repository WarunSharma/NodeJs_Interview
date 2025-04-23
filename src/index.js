const express = require("express");
const { Worker } = require("worker_threads");
// const calculateCount = require('./1_promise');

const PORT = process.env.PORT || 4001;
const app = express();

app.get("/blocking", async (req, res) => {
  const worker = new Worker("./src/2_worker.js");
  worker.on("message", (counter) => {
    res.send(`Counter is ${counter}`);
  });
  worker.on("error", (err) => {
    res.status(404).send(`And error occured ${err}`);
  });
});

app.get("/non-blocking", (req, res) => {
  res.send(`Non blocking request`);
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
