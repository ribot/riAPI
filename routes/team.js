// Load the modules
var fs = require('fs'),
    _ = require('underscore'),
    urls = require('../util/urls');

var dataPath = './data/team';

var list = function(req, res) {
    // Read all the files in the team data folder
    // TODO: Should make sure we only look at correctly formatted files
    fs.readdir(dataPath, function(err, files) {
        if (err) {
            console.log("Error getting team list files", err);
            return res.json(500, {error: "Unkown server error while getting team ribot"});
        }

        // Loop through all files
        var teamMembers = [];
        _.each(files, function(file) {
            // Get the json data and filter to a subset of information
            var data = fs.readFileSync(dataPath + '/' + file, 'UTF-8'); // TODO: This should be async
            var jsonData = JSON.parse(data);
            jsonData = _.pick(jsonData, 'firstName', 'lastName', 'nickname', 'hexColor', 'role');
            // Get the id and add a url for more data
            var id = file.replace('.json', '');
            jsonData['url'] = urls.getTeamMemberUrl(req, id);
            // Add the data to the result array
            teamMembers.push(jsonData);
        });

        // Return the data
        res.json(teamMembers);
    });
};

var single = function(req, res) {
    var path = dataPath + '/' + req.params.id + '.json';

    // Check the file exists
    fs.exists(path, function(exists) {
        if (!exists) {
            return res.json(404, {error: "No team member with this id exists"});
        }

        // Read in the data
        fs.readFile(path, 'UTF-8', function(err, data) {
            if (err) {
                console.log("Error getting team file:", req.params.id, err);
                return res.json(500, {error: "Unkown server error"});
            }

            // Convert to json and send it back
            var jsonData = JSON.parse(data);
            res.json(jsonData);
        });
    });
};

module.exports = {
    list: list,
    single: single
};
