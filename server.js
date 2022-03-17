// server.js deals with routing calls
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/apiroutes/apiroutes.js');
require('./routes/htmlroutes/htmlroutes.js');

app.listen(PORT, function() {
 console.log(`API server now on port ${PORT}!`);
});
