/**
 * The WelcomeController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/WelcomeService');
const createwelcome = async (request, response) => {
  await Controller.handleRequest(request, response, service.createwelcome);
};

const deletewelcome = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletewelcome);
};

const getAllwelcome = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllwelcome);
};

const getByParamswelcome = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamswelcome);
};

const getwelcome = async (request, response) => {
  await Controller.handleRequest(request, response, service.getwelcome);
};

const updatewelcome = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatewelcome);
};


module.exports = {
  createwelcome,
  deletewelcome,
  getAllwelcome,
  getByParamswelcome,
  getwelcome,
  updatewelcome,
};
