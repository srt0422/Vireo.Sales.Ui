exports.id = 0;
exports.modules = {

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hapi = __webpack_require__(3);

var Hapi = _interopRequireWildcard(_hapi);

var _paymentService = __webpack_require__(4);

var _paymentService2 = _interopRequireDefault(_paymentService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var rootRoute = "/api";

var server = new Hapi.Server();
server.connection({ port: 3001, host: 'localhost' });

server.register([{
    register: __webpack_require__(7),
    options: {
        origins: ['http://localhost:3000']
    }
}, {
    register: __webpack_require__(8),
    options: {
        handlerName: "await"
    }
}], function (err) {
    server.start(function (err) {

        if (err) {
            throw err;
        }

        console.log("Server running at: " + server.info.uri);
    });
});

server.route({
    method: 'POST',
    path: rootRoute + "/payment",
    handler: {
        await: function _await(request, reply) {
            var _this = this;

            return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var _result;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _paymentService2.default.makePayment(request.payload.token, request.payload.email);

                            case 3:
                                _result = _context.sent;
                                _context.next = 9;
                                break;

                            case 6:
                                _context.prev = 6;
                                _context.t0 = _context["catch"](0);
                                return _context.abrupt("return", reply(_context.t0));

                            case 9:

                                reply.response.code(201);

                                return _context.abrupt("return", reply(result));

                            case 11:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this, [[0, 6]]);
            }))();
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