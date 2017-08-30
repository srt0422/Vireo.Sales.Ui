import * as Hapi from "hapi";
import paymentService from "./services/paymentService";
import { chargesCollection, customersCollection, appContentsCollection, contactsCollection } from "./data/collections";
import nodemailer from "nodemailer";

const rootRoute = "/api";

const server = new Hapi.Server();

if (process.env.PORT) {
    server.connection({ port: process.env.PORT });
}
else {
    server.connection({ port: process.env.PORT || 3001, host: process.env.HOST || 'localhost' });
}

server.register([{
    register: require("vision")
},
{
    register: require('hapi-cors'),
    options: {
        "headers": ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-Language", "Accept-Encoding", "Access-Control-Request-Headers", "Access-Control-Request-Method", "DNT", "Connection", "Host", "Origin", "Refferer", "User-Agent"],
        origins: ['http://localhost:3080'] //, "http://apptivator.cloudvireo.com", "https://apptivator.cloudvireo.com", "http://www.apptivator.cloudvireo.com", "https://www.apptivator.cloudvireo.com"]
    }
},
{
    register: require('overjoy-await'),
    options: {
        handlerName: "await"
    }
},
{
    register: require('hapi-email-plugin'),
    options: {
        transporter: nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secureConnection: true,
            port: 465,
            auth: {
                user: 'vireo.development@gmail.com',
                pass: process.env.GMAIL_PASS
            },
            tls: {
                secureProtocol: "TLSv1_method"
            }
        })
    }
}],
    (err) => {
        server.views({
            engines: { html: require("handlebars") },
            path: "views"
        });

        server.start((err) => {

            if (err) {
                throw err;
            }

            console.log(__dirname);
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
const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source => readdirSync(source).map(name => join(source, name)).filter(isDirectory)

server.route({
    method: 'POST',
    path: `${rootRoute}/email`,
    handler: {
        async await(request, reply) {

            const { from, email, message } = request.payload;

            server.render("email", { message }, function (err, rendered, config) {

                if (err) {
                    reply(err);
                    return;
                }

                const emailOptions = {
                    from: from,
                    to: email,
                    subject: 'Mobile App Contact',
                    html: rendered
                };

                server.methods.sendEmail(emailOptions, (err, response) => {
                    if (err) {
                        reply(err);
                        return;
                    }

                    reply().code(201);
                });

            });
        }
    }
});

server.route({
    method: 'GET',
    path: `${rootRoute}/email`,
    handler: {
        async await(request, reply) {

            server.render("email", { message: "test contact message" }, function (err, rendered, config) {

                if (err) {
                    reply(err);
                }

                const emailOptions = {
                    from: "vireo.development@gmail.com",
                    to: "srt0422@gmail.com",
                    subject: 'Mobile App Contact',
                    html: rendered
                };

                server.methods.sendEmail(emailOptions, (err, response) => {

                    if (err) {
                        reply(err);
                    }

                    reply();
                });

            });
        }
    }
});

server.route({
    method: 'POST',
    path: `${rootRoute}/contact`,
    handler: {
        async await(request, reply) {

            await contactsCollection.save(request.payload);

            const { from, email, message, optIn, product } = request.payload;

            server.render("email", { message }, function (err, rendered, config) {

                if (err) {
                    reply(err);
                }

                const emailOptions = {
                    from: from,
                    to: "vireo.development@gmail.com",
                    subject: `Apptivator Contact - ${from} - requested product: ${product} - opted in: ${optIn}`,
                    html: rendered
                };

                server.methods.sendEmail(emailOptions, (err, response) => {

                    if (err) {
                        reply(err);
                    }

                    reply();
                });

            });
        }
    }
});