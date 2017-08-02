import * as Hapi from "hapi";
import paymentService from "./services/paymentService";

const rootRoute = "/api";

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3001, host: 'localhost' });

server.register([{
    register: require('hapi-cors'),
    options: {
        origins: ['http://localhost:3000', "http://apptivator.cloudvireo.com", "https://apptivator.cloudvireo.com", "http://www.apptivator.cloudvireo.com", "https://www.apptivator.cloudvireo.com"]
    }
},
{
    register: require('overjoy-await'),
    options: {
        handlerName: "await"
    }
}],
    (err) => {
        server.start((err) => {

            if (err) {
                throw err;
            }

            console.log(`Server running at: ${server.info.uri}`);
        });
    });

server.route({
    method: 'POST',
    path: `${rootRoute}/payment`,
    handler: {
        async await(request, reply) {

            try {
                await paymentService.makePayment(request.payload.token, request.payload.email);
            }
            catch (e) {

                return reply(e);
            }
            
            return reply().code(201);

            //reply('{"test": "hello"}');
        }
    }
});

//server.route({
//    method: 'GET',
//    path: '/{name}',
//    handler: function (request, reply) {
//        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
//    }
//});