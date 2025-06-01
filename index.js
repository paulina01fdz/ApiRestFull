const exp = require('express');
const app = exp();
require('dotenv').config();

const logger = require('morgan');
app.use(logger('dev'));

app.use(exp.urlencoded({extended: false}));
app.use(exp.json());

const modeloCliente = require('./backend /models/cliente.model');

app.get ('/ensayoCliente', async (res, req) =>{                                                            
    let listarCliente = await modeloCliente.find();
    console.log (listarCliente)   
})

app.listen(process.env.PORT, () => {
    console.log('Servidor en línea');
});