const exp = require('express');
const app = exp();
require('dotenv').config();

const logger = require('morgan');
app.use(logger('dev'));

app.use(exp.urlencoded({extended: false}));
app.use(exp.json());

app.listen(process.env.PORT, () => {
    console.log('Servidor en línea');
});