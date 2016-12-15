**hapi-mobile-detect** is a User-agent information plugin for [**hapi**](https://github.com/hapijs/hapi)

> hapi-mobile-detect is a fork of [Scooter](https://github.com/hapijs/scooter) authored and maintained by [Daniel Bretoi](https://github.com/danielb2).

hapi-mobile-detect uses the [mobile-detect] package to provide user-agent information. For
more details of what information hapi-mobile-detect provides, please see the mobile-detect web-page.

[useragent]: https://www.npmjs.org/package/mobile-detect

# Usage

``` javascript
    const Hapi = require('hapi');
    const server = new Hapi.Server(8086);
    const MobileDetect = require('hapi-mobile-detect');

    server.route({
        method: 'GET',
        path: '/is-mobile',
        handler: (request, reply) => {

            return reply(request.plugins.md.mobile());
        }
    });

    server.register(MobileDetect, (err) => {

        server.start(() => {

            console.log(server.info.uri + '/is-mobile');
        });
    });
```
