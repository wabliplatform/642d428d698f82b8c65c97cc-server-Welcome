/**
 * The WevController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/WevService');
const createwev = async (request, response) => {
  await Controller.handleRequest(request, response, service.createwev);
};

const deletewev = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletewev);
};

const getAllwev = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllwev);
};

const getByParamswev = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamswev);
};

const getwev = async (request, response) => {
  await Controller.handleRequest(request, response, service.getwev);
};

const updatewev = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatewev);
};


module.exports = {
  createwev,
  deletewev,
  getAllwev,
  getByParamswev,
  getwev,
  updatewev,
};
