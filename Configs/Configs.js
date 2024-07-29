//This is Configuration file used for connecting database to server by mongoose;
const mongoose = require('mongoose');
require('dotenv').config();

const connection = mongoose.connect(process.env.mongoURL);

module.exports = { connection }; //module is made public