/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Welcome } = require('../models/Welcome');

/**
* Creates the data
*
* welcome Welcome data to be created
* returns welcome
* */
const createwelcome = ({ welcome }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Welcome(welcome).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* welcomeId String the Id parameter
* no response value expected for this operation
* */
const deletewelcome = ({ welcomeId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Welcome.findOneAndDelete({ _id:welcomeId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllwelcome = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Welcome.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data based on user query
*
* filter String the query based on which the search is performed
* returns Object
* */
const getByParamswelcome = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Welcome.find(JSON.parse( filter )).exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* welcomeId String the Id parameter
* returns welcome
* */
const getwelcome = ({ welcomeId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Welcome.findById(welcomeId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* welcomeId String the Id parameter
* welcome Welcome data to be updated (optional)
* returns welcome
* */
const updatewelcome = ({ welcomeId, welcome }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Welcome.findOneAndUpdate({ _id:welcomeId },welcome).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createwelcome,
  deletewelcome,
  getAllwelcome,
  getByParamswelcome,
  getwelcome,
  updatewelcome,
};
