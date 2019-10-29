const express = require('express');
const mongoose = require('mongoose');
const db = require('./models');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/apiRoutes')(app);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project3';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, function() {
  console.log('App running on port ' + PORT);
});

module.exports = app;