const router = require('express').Router();
const fs = require('fs');
const store = require('./db/store.js');
// const server = require('./server.js');

// to review this code and need for it in this form
module.exports = function(app) {
 app.get('api/notes', function(req, res) {
  fs.readFile('./db/db.json', (err, data) => {
   if (err) throw err;
   dbNotes = JSON.parse(data);
   res.send(dbNotes);
  });
});
 app.post('/api/notes', function (req, res) {
  const userNotes = req.body;
  fs.readFile('./db/db.json', (err, data) => {
   if (err) throw err;
   dbNotes = JSON.parse(data);
   dbNotes.push(userNotes);
   let number = 1;
   dbNotes.forEach((note, index) => {
    note.id = number;
    number++;
    return dbNotes;
   });
   stringNotes = JSON.stringify(dbNotes);

   fs.writeFile('.db/db.json', stringNotes, (err, data) => {
    if (err) throw err; 
   });
  });
 });

  app.delete('api/notes/:id', function(req, res) {
   const deleteNote = req.param.id;
   fs.readFile ('./db/notes.json', (err, data) => {
    if (err) throw err;

    dbNotes = JSON.parse(data);
    for (let i = 0; i < dbNotes.length; i++) {
      if (dbNotes[i].id === Number(deleteNote)) {
       dbNotes.splice([i], 1);
      }
    }
    stringNotes = JSON.stringify(data);

    fs.writeFile('./db/notes.json', stringNotes, (err, data) => {
     if (err) throw err;
    });
     res.status(223).send();
   });
  });
 }

