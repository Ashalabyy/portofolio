const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const erorrController = require('./controller/404');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


const homeRoutes = require('./routes/home');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes);

app.use(erorrController.erorrPage);

app.listen(8080);