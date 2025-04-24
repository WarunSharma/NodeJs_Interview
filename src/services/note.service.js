const Note = require("../models/note.model");
const { v4: uuidv4 } = require("uuid");

let notes = [];

const getAllNotes = () => notes;

const getNoteById = (id) => notes.find((n) => n.id === id);

const createNote = (title, content) => {
  const note = new Note(uuidv4(), title, content);
  notes.push(note);
  return note;
};

const deleteNote = (id) => {
  notes = notes.filter((n) => n.id !== id);
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
};
