// server.js deals with routing calls
const express = require('express');
const { notes } = require('./db/notes.json');

// router.use(require('./routes/apiroutes/apiroutes.js'));
// router.use(require('./routes/htmlroutes/htmlroutes.js'));
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/api/notes', (req, res) => {
 res.json(notes);
});

// const apiroutes = require('./routes/apiroutes/apiroutes.js');
// const htmlroutes = require('./routes/htmlroutes/htmlroutes.js');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.directory('public'));
// app.use(express.static('public'));

// app.use('/api', apiroutes);
// app.use('/', htmlroutes);

app.listen(PORT, () => {
 console.log(`API server now on port ${PORT}!`);
});
