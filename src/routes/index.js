const routes = require('express').Router();

const aulaController = require('../controllers/aulaController')

routes.post('/aula', aulaController.createAula);
routes.get('/aulas/:id?', aulaController.getAulas);
routes.put('/aula/:id', aulaController.updateAula);
routes.delete('/aula/:id', aulaController.deleteAula);

module.exports = routes;