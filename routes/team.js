// Load the modules
var fs = require('fs'),
    _ = require('underscore');

var list = function(req, res) {
    var path = './data/team';
    fs.readdir(path, function(err, files) {
        if (err) {
            console.log("Error getting team list files", err);
            return res.json(500, {error: "Unkown server error while getting team ribot"});
        }

        var teamMembers = [];
        _.each(files, function(file) {
            var data = fs.readFileSync(path + '/' + file, 'UTF-8'); // TODO: This should be async
            var jsonData = JSON.parse(data);
            jsonData = _.pick(jsonData, 'firstName', 'lastName', 'nickname', 'hexColor', 'role');
            teamMembers.push(jsonData);
        });

        res.json(teamMembers);
    });
};

module.exports = {
    list: list
};
