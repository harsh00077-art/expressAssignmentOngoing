const express = require('express');
const bodyParser = require('body-parser');
const mainRouter = require('./api');
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(mainRouter);


app.listen(8080, () => {
    console.log('server is running');
})