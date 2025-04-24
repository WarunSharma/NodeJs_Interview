import express from 'express';

const PORT = process.env.PORT || 4001;
const app = express();

console.log(`worker pid=${process.pid}`);

app.get('/heavy', (req, res) => {
    let counter = 0;

    for (let i = 0; i < 5000000; ++i) {
        counter++;
    }

    res.send(`The result of cpu intensive task is ${counter}`);
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})