const express = require("express");

const PORT = process.env.PORT || 4001;
const app = express();

console.log("🔵 Start of the script (sync)");

process.nextTick(() => {
  console.log("🟢 Inside process.nextTick");
});

Promise.resolve()
  .then(() => {
    console.log("🟡 Inside Promise.then 1");
    return Promise.resolve();
  })
  .then(() => {
    console.log("🟡 Inside Promise.then 2");
  });

async function asyncFunction() {
  console.log("🟣 Inside asyncFunction (start)");
  await Promise.resolve();
  console.log("🟣 Inside asyncFunction (after await)");
}
asyncFunction();

setTimeout(() => {
  console.log("🟠 Inside setTimeout 0ms");
}, 0);

setInterval(() => {
  console.log("🔴 Inside setInterval 0ms");
}, 0);

setImmediate(() => {
  console.log("🟤 Inside setImmediate");
});

console.log("🔵 End of the script (sync)");

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
