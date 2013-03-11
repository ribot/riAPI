exports.getTeamMemberUrl = function(req, id) {
    return exports.getBaseServerUrl(req) + 'team/' + id;
};

exports.getBaseServerUrl = function(req) {
    return 'http://' + req.header('host') + '/api/';
};
