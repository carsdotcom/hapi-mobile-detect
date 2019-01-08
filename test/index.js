'use strict';

// Load modules

const Code = require('code');
const Lab = require('lab');
const Hapi = require('hapi');
const HapiMobileDetect = require('../');


// Declare internals

const internals = {};


// Test shortcuts

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;


describe('hapi-mobile-detect', () => {

    it('parses and sets user-agent information for an incoming request', async () => {

        const server = new Hapi.Server();

        server.route({
            method: 'GET',
            path: '/',
            handler: (request, h) => {

                return request.plugins.md.mobile();
            }
        });

        try {
            await server.register(HapiMobileDetect);
        }
        catch (err) {
            Code.fail(`An error occurred registering the plugin ${err.message}`);
        }

        const res = await server.inject({
            method: 'GET',
            url: '/',
            headers: {
                'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3'
            }
        });

        expect(res.result).to.equal('iPhone');
    });
});
