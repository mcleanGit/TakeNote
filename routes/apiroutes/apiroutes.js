const router = require('express').Router();
const store = require('../../db/store');

// change from app.get to router.get etc and to => function using store
router.get('/notes', (_req, res) => {
    store.getNotes().then((notes) => {
      return res.json(notes);
    }).catch((err) => {
      res.status(500).json(err);
    });
  })

router.post('/api/notes', (req, res) => {
    const newNote = { title, text, id: uuid() };
    store.addNote().then(newNote);
    req.body = notes.length.toString();
      if (!validateNotes(req.body)) {
        res.status(400).send('Notes not properly formatted.');
      } else {    
        addNewNote(req.body, notes);
        res.json(newNote);
      } 
  });

router.delete('api/notes/:id', (req, res) => {
      store.removeNote(id);
      const id = uuid;
      note = JSON.parse(notes);
      for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === Number(deleteNote)) {
          notes.splice([i], 1);
        }
        stringNotes = JSON.stringify(notes);
      }
  });
      
module.exports = router;
