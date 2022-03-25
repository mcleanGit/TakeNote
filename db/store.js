// store.js is class Store JS file newly created to handle notes to/from db.json with fs modules (post tutoring discussions)
const fs = require('fs');
const util = require('util');
const uuid = require('uuid');
const fsReadFile = util.promisify(fs.readFile);
const fsWriteFile = util.promisify(fs.writeFile);

class Store {
 read(){
  return fsReadFile('db/db.json', 'utf8');
 }
 write(note) {
  return fsWriteFile('db/db.json', JSON.stringify(note));
 }
 getNotes() {
  return this.read()
  .then((notes) => {
   let haveNotes; 
   try {
    haveNotes = [].concat(JSON.parse(notes));    
   }
   catch(err) {
    haveNotes = [];  
   }
   return haveNotes;
  });
 }
 addNote(note) {
  const { title, text } = note;
  if (!title || !text) {
   throw new Error ('Please enter a note title and a note text');
  }
  // imports uuid to provide unique id to new note, also requisite for remove/delete
  const newNote = { title, text, id: `${uuid.v1()}` };
  return this.getNotes()
  .then((notes) => [...notes, newNote])
  .then((updatedNote) => this.write(updatedNote))
  .then(() => newNote);
 }
 removeNote(id) {
  return this.getNotes()
  .then ((notes) => notes.filter((note) => note.id !== id ))
  .then ((filteredNote) => this.write(filteredNote));
 }
}
 module.exports = new Store();
