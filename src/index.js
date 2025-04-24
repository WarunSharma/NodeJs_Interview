const express = require('express');
const notesRoute = require('./routes/note.routes');

const PORT = process.env.PORT || 4001;
const app = express();

app.use(express.json());
app.use('/api/v1/notes', notesRoute)

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})