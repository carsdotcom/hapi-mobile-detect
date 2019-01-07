'use strict';

// Load modules

const MobileDetect = require('mobile-detect');

// Declare internals

const internals = {};



module.exports = {
    pkg: require('../package.json'),
    register: (server, options) => {

        server.ext('onRequest', internals.onRequest);
    }
};


internals.onRequest = (request, h) => {

    request.plugins.md = new MobileDetect(request.headers['user-agent']);
    return h.continue;
};
