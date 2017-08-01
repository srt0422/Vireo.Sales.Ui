exports.id = 0;
exports.modules = {

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hapi__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hapi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hapi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_paymentService__ = __webpack_require__(5);



const rootRoute = "/api";

const server = new __WEBPACK_IMPORTED_MODULE_0_hapi__["Server"]();
server.connection({ port: 3001, host: 'localhost' });

server.register([{
    register: __webpack_require__(11),
    options: {
        origins: ['http://localhost:3000']
    }
},
{
    register: __webpack_require__(12),
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

//server.route({
//    method: 'GET',
//    path: '/{name}',
//    handler: function (request, reply) {
//        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
//    }
//});

/***/ })

};