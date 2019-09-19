//import knex dependency
const knex = require('knex');

//import knexFile 
const knexFile = require('../../knexfile.js')

//set knexConfig to use knexFile development enviroment
const knexConfig = knexFile.development;

//export knexConfig
module.exports = knex(knexConfig)