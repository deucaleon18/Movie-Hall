const controller = require('./controller');

const express=require('express');
const routes=express.Router();

routes.get('/',controller.home);
routes.use(controller.err);

module.exports = routes;