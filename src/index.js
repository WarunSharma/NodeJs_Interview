const express = require('express');
const calculateCount = require('./1_promise');

const PORT = process.env.PORT || 4001;
const app = express();

app.get('/blocking', async(req, res) => {
    const counter = await calculateCount();
    res.send(`Counter is ${counter}`);
})

app.get('/non-blocking', (req, res) => {
    res.send(`Non blocking request`);
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})