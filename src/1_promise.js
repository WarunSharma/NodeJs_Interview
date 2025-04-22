/*
In your web browser, visit http://localhost:3000/blocking and as it loads, quickly reload the http://localhost:3000/non-blocking tabs. As you will notice, the non-blocking routes are still affected and they will all wait for the /blocking route to finish loading. Because the routes are still affected, promises don’t make JavaScript code execute in parallel and cannot be used to make CPU-bound tasks non-blocking.
*/

module.exports = function calculateCount() {
  return new Promise((resolve, reject) => {
    let counter = 0;
    for (let i = 1; i < 20000000000; ++i) {
      counter++;
    }
    resolve(counter);
  });
};
