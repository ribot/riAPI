// Load the modules
var fs = require('fs');

var dataPath = './data';

var single = function(req, res) {
    var path = dataPath + '/studio.json';

    // Check the file exists
    fs.exists(path, function(exists) {
        if (!exists) {
            return res.json(500, {error: "Cannot find studio data"});
        }

        // Send the file
        res.sendfile(path);
    });
};

module.exports = {
    single: single
};
