const noteService = require('../services/note.service');

const getNotes = (req, res) => {
  res.json(noteService.getAllNotes());
};

const getNote = (req, res) => {
  const note = noteService.getNoteById(req.params.id);
  if (!note) return res.status(404).json({ message: 'Note not found' });
  res.json(note);
};

const createNote = (req, res) => {
  const { title, content } = req.body;
  const note = noteService.createNote(title, content);
  res.status(201).json(note);
};

const deleteNote = (req, res) => {
  noteService.deleteNote(req.params.id);
  res.status(204).end();
};

module.exports = {
  getNotes,
  getNote,
  createNote,
  deleteNote,
};
