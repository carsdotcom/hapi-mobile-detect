'use strict';

// Load modules

const MobileDetect = require('mobile-detect');

// Declare internals

const internals = {};


exports.register = (server, options, next) => {

    server.ext('onRequest', internals.onRequest);
    return next();
};


exports.register.attributes = {
    pkg: require('../package.json')
};


internals.onRequest = (request, reply) => {

    request.plugins.md = new MobileDetect(request.headers['user-agent']);
    return reply.continue();
};
