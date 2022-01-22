const controller = require('./controller');

const express=require('express');
const routes=express.Router();

routes.get('/',controller.home);
routes.post('/book/:id',controller.bookslot);
routes.post('/cancel/:id',controller.cancelslot);
routes.use(controller.err);

module.exports = routes;