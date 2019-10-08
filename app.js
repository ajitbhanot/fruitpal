const express = require('express');
const port = 3002;
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const mysql = require('mysql');
const path = require('path');
const http = require('http');
const showresults = require('./routes/routes'); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});

