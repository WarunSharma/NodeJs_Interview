const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 4001;
const app = express();
const filePath = path.join(__dirname, 'my-file-read.txt');
const readable = fs.createReadStream(filePath, {highWaterMark: 20})

readable.on("data", (chunck) => {
    console.log("New chuck: ", chunck.toString());
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})
