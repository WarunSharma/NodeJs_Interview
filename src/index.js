const express = require('express');

const PORT = process.env.PORT || 4001;
const app = express();

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})