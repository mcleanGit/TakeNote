const router = require('express');
const { route } = require('express/lib/application');
const res = require('express/lib/response');
const fs = require('fs');

router.use(require('./routes/apiroutes/apiroutes.js'));
router.use(requre('./routes/htmlroutes/htmlroutes'));

module.exports = router;
module.exports = function(app) {

 app.get('/notes', function(req, res) {
  fs.readFile('./db/notes.json', (err, data) => {
   if (err) throw err;
   dbNotes = JSON.parse(data);
   res.send(dbNotes);
  });
});
 app.post('/notes', function (req, res) {
  const userNotes = req.body;
  fs.readFile('/db/notes.json', (err, data) => {
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

   fs.writeFile('.db/notes.json', stringNotes, (err, data) => {
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
    stringNotes = JSON.stringify(dbNotes);

    fs.writeFile('./db/notes.json', stringNotes, (err, data) => {
     if (err) throw err;
    });
     res.status(223).send();
   });
  });
 }

