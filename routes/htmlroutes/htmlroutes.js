const path = require('path');
const express = require('express');
const app = express();

app.get('/notes', function(req, res) {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});
