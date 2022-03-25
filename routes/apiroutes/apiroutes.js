const router = require('express').Router();
const store = require('../../db/store');

// change from app.get to router.get etc and to => function using store
router.get('/notes', (req, res) => {
    store.getNotes().then((notes) => {
      return res.json(notes);
    }).catch((err) => {
      res.status(500).json(err);
    });
  });

router.post('/notes', (req, res) => {
    store.addNote(req.body).then((note) => 
      res.json(note))
    .catch((err) => 
      res.status(500).json(err));
  });

router.delete('/notes/:id', (req, res) => {
    store.removeNote(req.params.id).then(() => 
      res.json({ok: true}))
    .catch((err) => 
      res.status(500).json(err));
  });

module.exports = router;
