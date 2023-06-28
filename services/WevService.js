/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Wev } = require('../models/Wev');

/**
* Creates the data
*
* wev Wev data to be created
* returns wev
* */
const createwev = ({ wev }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Wev(wev).save();
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
* wevId String the Id parameter
* no response value expected for this operation
* */
const deletewev = ({ wevId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Wev.findOneAndDelete({ _id:wevId }).exec();
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
const getAllwev = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Wev.find().exec();
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
const getByParamswev = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Wev.find(JSON.parse( filter )).exec();
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
* wevId String the Id parameter
* returns wev
* */
const getwev = ({ wevId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Wev.findById(wevId)
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
* wevId String the Id parameter
* wev Wev data to be updated (optional)
* returns wev
* */
const updatewev = ({ wevId, wev }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Wev.findOneAndUpdate({ _id:wevId },wev).exec();
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
  createwev,
  deletewev,
  getAllwev,
  getByParamswev,
  getwev,
  updatewev,
};
