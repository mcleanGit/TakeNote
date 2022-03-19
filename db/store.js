// store.js is new JSON file created to handle notes to db.json with fs module - post SS session
const fs = require('fs');
const util = require('util');

const uuid = require('uuid');
const { runInThisContext } = require('vm'); // this was auto-supplied?

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
  const newNote = { title, text, id: uuid()};
  return this.getNotes()
  .then((notes) => [...notes, newNote])
  .then((updatedNotes) => this.write(updatedNote))
  .then(() => newNote);
 }
 removeNote(id) {
  return thisNote.getNotes()
  .then ((notes) => notes.filter((note) => note.id !== id ))
  .then ((filteredNotes) => this.write(filteredNote));
 }
}
 module.exports = new Store();
