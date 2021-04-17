const express = require('express');
const app = express();
const path = require('path');

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// routes
const indexRoutes = require('./routes/index.js');
app.use(indexRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listen port
const port = app.get('port')
app.listen(app.get('port'), () => {
    console.log(`Listen on port ${port}`);
    console.log(`http://localhost:${port}`);
});