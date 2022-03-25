// server.js deals with routing calls
const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiroutes/apiroutes.js');
const htmlRoutes = require('./routes/htmlroutes/htmlroutes.js');

const PORT = process.env.PORT || 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// confirms connection to PORT
app.listen(PORT, function() {
 console.log(`API server now on port ${PORT}!`);
});
