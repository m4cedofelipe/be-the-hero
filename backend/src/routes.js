const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Endpoints Session
routes.post('/sessions', SessionController.create)

// Endpoints Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Endpoints Incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

// Endpoints Profile
routes.get('/profile', ProfileController.index);

module.exports = routes;