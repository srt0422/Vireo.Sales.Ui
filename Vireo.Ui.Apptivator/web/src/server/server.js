(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__db__ = __webpack_require__(8);
﻿

let db = __WEBPACK_IMPORTED_MODULE_0__db__["a" /* default */];

class Collection {

    constructor(name) {
        this.name = name;
    }

    async save(entity) {

        await this.connect(this.name);

        let result = await new Promise((resolve, reject) => {
            try {
                if (!this.source) {
                    console.log(this);
                    this.source = this.dataSource.collection(this.name);
                }

                this.source.insertOne(entity, this.getInsertCallback(resolve, reject));
            }
            catch (e) {
                reject(new Error(e));
            }
        });

        this.dispose();

        return result;
    }

    async get(id) {

        await this.connect(this.name);

        let result = await new Promise((resolve, reject) => {
            try {
                if (!this.source) {
                    console.log(this);
                    this.source = this.dataSource.collection(this.name);
                }

                return this.source.findOne({ id: id }, this.getFetchCallback(resolve, reject));
            }
            catch (e) {
                reject(new Error(e));
            }
        });

        this.dispose();

        return result;
    }

    async getAll() {

        await this.connect(this.name);

        let result = await new Promise((resolve, reject) => {

            try {
                if (!this.source) {
                    console.log(this);
                    this.source = this.dataSource.collection(this.name);
                }
                return this.source.find().toArray((err, results) => {
                    if (err) {
                        reject(new Error(err));
                    }
                    else {
                        resolve(results)
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });

        this.dispose();

        return result;
    }

    getInsertCallback(resolve, reject) {

        return (err, result) => {

            if (err) {
                reject(new Error(err));
            }
            else {
                resolve(result.insertedId);
            }
        }
    }

    getFetchCallback(resolve, reject) {

        return (err, result) => {

            if (err) {
                reject(new Error(err));
            }
            else {
                resolve(result);
            }
        }
    }

    dispose() {

        if (this.dataSource) {
            this.dataSource.close();
        }
    }

    async connect(name) {

        try {
            let mongodb = await db.connect();

            this.source = mongodb.collection(name);

            if (this.dataSource) {
                this.dataSource.close();
            }

            this.dataSource = mongodb;
        }
        catch (e) { await Promise.reject(new Error(e)); }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Collection;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collection__ = __webpack_require__(0);
﻿

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0__collection__["a" /* default */]("customers"));

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collection__ = __webpack_require__(0);
﻿

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0__collection__["a" /* default */]("charges"));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hapi__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hapi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_paymentService__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_collections__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nodemailer__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nodemailer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nodemailer__);





const rootRoute = "/api";

const server = new __WEBPACK_IMPORTED_MODULE_0_hapi__["Server"]();

if (process.env.PORT) {
    server.connection({ port: process.env.PORT });
}
else {
    server.connection({ port: process.env.PORT || 3001, host: process.env.HOST || 'localhost' });
}

server.register([{
    register: __webpack_require__(13)
},
{
    register: __webpack_require__(14),
    options: {
        "headers": ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-Language", "Accept-Encoding", "Access-Control-Request-Headers", "Access-Control-Request-Method", "DNT", "Connection", "Host", "Origin", "Refferer", "User-Agent"],
        origins: ['http://localhost:3080'] //, "http://apptivator.cloudvireo.com", "https://apptivator.cloudvireo.com", "http://www.apptivator.cloudvireo.com", "https://www.apptivator.cloudvireo.com"]
    }
},
{
    register: __webpack_require__(15),
    options: {
        handlerName: "await"
    }
},
{
    register: __webpack_require__(16),
    options: {
        transporter: __WEBPACK_IMPORTED_MODULE_3_nodemailer___default.a.createTransport({
            host: 'smtp.gmail.com',
            secureConnection: true,
            port: 465,
            auth: {
                user: 'vireo.development@gmail.com',
                pass: 'elacxcepehrpordh'
            },
            tls: {
                secureProtocol: "TLSv1_method"
            }
        })
    }
}],
    (err) => {
        server.views({
            engines: { html: __webpack_require__(17) },
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
const { lstatSync, readdirSync } = __webpack_require__(18)
const { join } = __webpack_require__(19)

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source => readdirSync(source).map(name => join(source, name)).filter(isDirectory)

server.route({
    method: 'POST',
    path: `${rootRoute}/email`,
    handler: function (request, reply) {

        const { from, email, message } = request.payload;

        server.render("email", { message }, function (err, rendered, config) {

            if (err) {
                reply(err);
            }

            const emailOptions = {
                from: from,
                to: email,
                subject: 'Mobile App Contact',
                html: rendered
            };

            server.methods.sendEmail(emailOptions, (err, response) => {
                debugger;
                if (err) {
                    reply(err);
                }

                reply();
            });

        });
    }
});

server.route({
    method: 'GET',
    path: `${rootRoute}/email`,
    handler: function (request, reply) {

        server.render("email", { message: "test contact message" }, function (err, rendered, config) {

            if (err) {
                reply(err);
            }

            const emailOptions = {
                from: "info@cloudvireo.com",
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
});

server.route({
    method: 'POST',
    path: `${rootRoute}/contact`,
    handler: function (request, reply) {

        const { from, email, message, optIn, product } = request.payload;

        server.render("email", { message }, function (err, rendered, config) {

            if (err) {
                reply(err);
            }

            const emailOptions = {
                from: from,
                to: "info@cloudvireo.com",
                subject: `Apptivator Contact - ${from} - requested product ${product} - opted in: ${optIn}`,
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/"))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("hapi");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stripe__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stripe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_stripe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_collections_customersCollection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_collections_chargesCollection__ = __webpack_require__(2);
﻿



const stripe = new __WEBPACK_IMPORTED_MODULE_0_stripe__["Stripe"]("sk_test_OHx1Z0IcyDglKviPsmA8ZEtQ");

/* harmony default export */ __webpack_exports__["a"] = ({

    makePayment: async function (token, email) {

        try {
            let customer = await stripe.customers.create({
                email: email,
                source: token,
            });

            await __WEBPACK_IMPORTED_MODULE_1__data_collections_customersCollection__["a" /* default */].save(customer);

            let charge = await stripe.charges.create({
                amount: 10000,
                currency: "usd",
                customer: customer.id,
            });

            await __WEBPACK_IMPORTED_MODULE_2__data_collections_chargesCollection__["a" /* default */].save(charge);
        }
        catch (e) {
            throw e;
        }
    }
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("stripe");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongodb__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongodb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongodb__);
﻿

const url = process.env.NODE_ENV === "production" ? 'mongodb://apptivator:5ZAmXndm3JPqYLRKFtULq5FviVbA2palr2kTlWMVqDVw9eEGBUUZCAOOzhAeJxlT0T6mhEBHxWgqH1T8lTLhNQ==@apptivator.documents.azure.com:10255/apptivator?ssl=true&replicaSet=globaldb' : 'mongodb://localhost:27017/apptivator';

let db = null;

/* harmony default export */ __webpack_exports__["a"] = ({
    connect: function () {
        return new Promise((resolve, reject) => {
            try {
                __WEBPACK_IMPORTED_MODULE_0_mongodb__["MongoClient"].connect(url, function (err, mongodb) {

                    if (err) {
                        reject(err);
                    }

                    db = mongodb;

                    resolve(mongodb);
                });
            }
            catch (e) {
                reject(new Error(e));
            }
        });
    },

    disconnect: function () {
        if (db) {
            db.close();
            db = null;
        }
    }
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customersCollection__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__customersCollection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chargesCollection__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__chargesCollection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appContentsCollection__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__appContentsCollection__["a"]; });
﻿



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collection__ = __webpack_require__(0);
﻿

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0__collection__["a" /* default */]("appContents"));

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vision");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("hapi-cors");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("overjoy-await");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("hapi-email-plugin");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("handlebars");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ])));