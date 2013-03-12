// Let's begin...

// Load in all our dependancies
var express = require('express'),
    http = require('http'),
    path = require('path');

// Get the instance of express
var app = express();

// Configure for all environments
app.configure(function(){
    app.set('port', process.env.PORT || 25708);
    app.use(express.logger('dev')); // Dont log when testing
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

// Configure if we're in development
app.configure('development', function(){
    app.use(express.errorHandler());
});

// Get all of the route modules
var team = require('./routes/team');
var studio = require('./routes/studio');

// Setup all the routes
app.get('/api/team', team.list);
app.get('/api/team/:id', team.single);
app.get('/api/team/:id/ribotar', team.ribotar);
app.get('/api/studio', studio.single);

// Start the server
// This also doubles as the export which is used for the test framework
var server = module.exports.server = http.createServer(app);
// Start the server
server.listen(3000, function() {
    console.log("Express server started at http://0.0.0.0:" + app.get('port'));
});
