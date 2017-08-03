import * as Hapi from "hapi";
import paymentService from "./services/paymentService";
import { chargesCollection, customersCollection, appContentsCollection } from "./data/collections";

const rootRoute = "/api";

const server = new Hapi.Server();

if (process.env.PORT) {
    server.connection({ port: process.env.PORT });
}
else {
    server.connection({ port: process.env.PORT || 3001, host: process.env.HOST || 'localhost' });
}
server.register([{
    register: require('hapi-cors'),
    options: {
        "headers": ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-Language", "Accept-Encoding", "Access-Control-Request-Headers", "Access-Control-Request-Method", "DNT", "Connection", "Host", "Origin", "Refferer", "User-Agent"],
        origins: ['http://localhost:3000'],//, "http://apptivator.cloudvireo.com", "https://apptivator.cloudvireo.com", "http://www.apptivator.cloudvireo.com", "https://www.apptivator.cloudvireo.com"]
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
    path: `${rootRoute}/appContents`,
    handler: {

        async await(request, reply) {

            try {
                await appContentsCollection.save(request.payload);
            }
            catch (e) {

                return reply(e);
            }

            return reply().code(201);
        }
    }
});

server.route({
    method: 'GET',
    path: `${rootRoute}/appContents`,
    handler: {
        async await(request, reply) {

            try {
                let appContents = await appContentsCollection.getAll();

                console.log(appContents);

                return reply(appContents);
            }
            catch (e) {

                return reply(e);
            }

            return reply().code(201);
        }
    }
});

server.route({
    method: 'POST',
    path: `${rootRoute}/payments`,
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

server.route({
    method: 'GET',
    path: `${rootRoute}/payments`,
    handler: {
        async await(request, reply) {

            let charges = await chargesCollection.getAll();

            console.log(charges);

            return reply(charges);
        }
    }
});

server.route({
    method: 'GET',
    path: `${rootRoute}/customers`,
    handler: {
        async await(request, reply) {
            let customers = await customersCollection.getAll();

            console.log(customers);

            return reply(customers);
        }
    }
});
