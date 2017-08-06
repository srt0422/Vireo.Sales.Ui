exports.id = 0;
exports.modules = {

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("vision");

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hapi__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hapi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_paymentService__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_collections__ = __webpack_require__(10);




const rootRoute = "/api";

const server = new __WEBPACK_IMPORTED_MODULE_0_hapi__["Server"]();

if (process.env.PORT) {
    server.connection({ port: process.env.PORT });
}
else {
    server.connection({ port: process.env.PORT || 3001, host: process.env.HOST || 'localhost' });
}

server.register([{
    register: __webpack_require__(16)
},
{
    register: __webpack_require__(13),
    options: {
        "headers": ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-Language", "Accept-Encoding", "Access-Control-Request-Headers", "Access-Control-Request-Method", "DNT", "Connection", "Host", "Origin", "Refferer", "User-Agent"],
        origins: ['http://localhost:3000'] //, "http://apptivator.cloudvireo.com", "https://apptivator.cloudvireo.com", "http://www.apptivator.cloudvireo.com", "https://www.apptivator.cloudvireo.com"]
    }
},
{
    register: __webpack_require__(14),
    options: {
        handlerName: "await"
    }
},
{ register: __webpack_require__(15) }],
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
                await __WEBPACK_IMPORTED_MODULE_2__data_collections__["a" /* appContentsCollection */].save(request.payload);
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
                let appContents = await __WEBPACK_IMPORTED_MODULE_2__data_collections__["a" /* appContentsCollection */].getAll();

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
                await __WEBPACK_IMPORTED_MODULE_1__services_paymentService__["a" /* default */].makePayment(request.payload.token, request.payload.email);
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

            let charges = await __WEBPACK_IMPORTED_MODULE_2__data_collections__["b" /* chargesCollection */].getAll();

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
            let customers = await __WEBPACK_IMPORTED_MODULE_2__data_collections__["c" /* customersCollection */].getAll();

            console.log(customers);

            return reply(customers);
        }
    }
});

server.route({
    method: 'POST',
    path: `${rootRoute}/email`,
    handler: function (request, reply) {

        const { from, email, message } = request.payload;

        server.render("contact/email", { message }, function (err, rendered, config) {

            const emailOptions = {
                from: from,
                to: email,
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
});


/***/ })

};