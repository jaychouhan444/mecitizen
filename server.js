const express = require('express');
const bodyParser = require('body-parser');
const dbconn = require('./utils/dbconn');
const userSchema = require('./schema/userSchema');
const swaggerDoc = require('./swaggerui');
const logger = require('./utils/logger');
const foo = require('../mecitizen/routes/foo');
  

//   logger.info('Hello world');
//   logger.warn('Warning message');
//   logger.debug('Debugging info');





//Initializing my express app
const app = express();
// foo(app);
swaggerDoc(app);

// swagger definition

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Dedicating port number to variable and use it to listen app
let port = process.env.PORT || 8080;        // set our port;
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.use(function (req, res, next) {
    // do logging 
    // do authentication 
    //console.log(req);
    console.log('Logging of request will be done here');
    next(); // make sure we go to the next routes and don't stop here
});



app.use('/foo', router,require('./routes/foo'));

// all of our routes will be prefixed with /api
app.use('/api', router);

//running app
app.listen(port,()=>{
    console.log('Server is up and running on port number ' + port);
})