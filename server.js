const fs = require('fs');
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// look at the environment variables, in this case called PORT
// when deploy the server will most likely have the port number in an environment variable so we check that first. If not available then run in 3001
const PORT = process.env.PORT || 3001;
// instantiate the server by assigning to express method 
const app = express();

/* Middleware */
// .use method to include middleware
// instruct the server to make these files static resources
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true}));
// parse incoming JSON data
app.use(express.json());
// any time a client navigates to <ourhost>/api the app will use router set up in apiRoutes
app.use('/api', apiRoutes);
// if the endpoint is /, then the router will serve back our HTML routes
app.use('/', htmlRoutes);

// callback function uses the console.log to tell us our server is running once we run it
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});