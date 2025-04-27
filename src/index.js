const express = require('express');
const path = require('path');
const {Transform, pipeline} = require('stream');
const fs = require('fs');
const { error } = require('console');

const PORT = process.env.PORT || 4001;
const app = express();
// const filePath = path.join(__dirname, 'my-file-read.txt');
// const readable = fs.createReadStream(filePath, {highWaterMark: 20})

// readable.on("data", (chunck) => {
//     console.log("New chuck: ", chunck.toString());
// })

// const filePath = path.join(__dirname, 'my-file-write.txt');
// const writable = fs.createWriteStream(filePath);
// writable.write("Hello World");
// writable.end("!");

const readFilePath = path.join(__dirname, 'my-file-read.txt');
const writeFilePath = path.join(__dirname, 'my-file-write.txt');

const readable = fs.createReadStream(readFilePath, {highWaterMark: 20});
const writable = fs.createWriteStream(writeFilePath);

const uppercase = new Transform({
    transform(chunck, encoding, callback) {
        callback(null, chunck.toString().toUpperCase());
    }
})

// readable.pipe(uppercase).pipe(writable);
pipeline(readable, uppercase, writable, (error) => {
    if (error)
        console.log(error);
})


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})
