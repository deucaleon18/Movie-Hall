const express = require('express');
const  path  = require('path');
const app = express();
const morgan = require('morgan');
const routes = require('./routes');

app.set('view engine','ejs');
app.use(express.static(path.join((__dirname,'public'))));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(3000);
app.use(routes);