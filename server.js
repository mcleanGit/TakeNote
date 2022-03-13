// server.js deals with routing calls
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();
const apiroutes = require('./routes/apiroutes/apiroutes.js');
const htmlroutes = require('./routes/htmlroutes/htmlroutes.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiroutes);
app.use('/', htmlroutes);

app.listen(PORT, () => {
 console.log(`API server now on port ${PORT}!`);
});
