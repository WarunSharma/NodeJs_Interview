const express = require('express');

const PORT = process.env.PORT || 4001;
const app = express();

app.get('/blocking', (req, res) => {
    let counter = 0;
    for (let i = 1; i < 20000000000; ++i) {
        counter++;
    }
    res.send(`Counter is ${counter}`);
})

app.get('/non-blocking', (req, res) => {
    res.send(`Non blocking request`);
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})