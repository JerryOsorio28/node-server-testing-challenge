//import asap in your code your .env file
require('dotenv').config();

//import server
const server = require('./server');

//assign defaults dynamic port
const port = process.env.PORT || 8000

//server listening to dynamic port
server.listen(port, () => console.log(`Server running in port ${port}`))