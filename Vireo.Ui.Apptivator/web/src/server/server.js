/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = babel-runtime/regenerator;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = babel-runtime/helpers/asyncToGenerator;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

var _db = __webpack_require__(13);

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = _db2.default;

var Collection = function () {
    function Collection(name) {
        (0, _classCallCheck3.default)(this, Collection);

        this.name = name;
    }

    (0, _createClass3.default)(Collection, [{
        key: "save",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(entity) {
                var _this = this;

                var result;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.connect(this.name);

                            case 2:
                                _context.next = 4;
                                return new _promise2.default(function (resolve, reject) {
                                    try {
                                        _this.source.insertOne(entity, _this.getInsertCallback(resolve, reject));
                                    } catch (e) {
                                        reject(new Error(e));
                                    }
                                });

                            case 4:
                                result = _context.sent;
                                _context.next = 7;
                                return this.dispose();

                            case 7:
                                return _context.abrupt("return", result);

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function save(_x) {
                return _ref.apply(this, arguments);
            }

            return save;
        }()
    }, {
        key: "get",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(id) {
                var _this2 = this;

                var result;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.connect(this.name);

                            case 2:
                                _context2.next = 4;
                                return new _promise2.default(function (resolve, reject) {
                                    try {
                                        return _this2.source.findOne({ id: id }, _this2.getFetchCallback(resolve, reject));
                                    } catch (e) {
                                        reject(new Error(e));
                                    }
                                });

                            case 4:
                                result = _context2.sent;
                                _context2.next = 7;
                                return this.dispose();

                            case 7:
                                return _context2.abrupt("return", result);

                            case 8:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function get(_x2) {
                return _ref2.apply(this, arguments);
            }

            return get;
        }()
    }, {
        key: "getAll",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
                var _this3 = this;

                var result;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.connect(this.name);

                            case 2:
                                _context3.next = 4;
                                return new _promise2.default(function (resolve, reject) {

                                    try {
                                        return _this3.source.find().toArray(function (err, results) {
                                            if (err) {
                                                reject(new Error(err));
                                            } else {
                                                resolve(results);
                                            }
                                        });
                                    } catch (e) {
                                        reject(e);
                                    }
                                });

                            case 4:
                                result = _context3.sent;
                                _context3.next = 7;
                                return this.dispose();

                            case 7:
                                return _context3.abrupt("return", result);

                            case 8:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getAll() {
                return _ref3.apply(this, arguments);
            }

            return getAll;
        }()
    }, {
        key: "getInsertCallback",
        value: function getInsertCallback(resolve, reject) {

            return function (err, result) {

                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(result.insertedId);
                }
            };
        }
    }, {
        key: "getFetchCallback",
        value: function getFetchCallback(resolve, reject) {

            return function (err, result) {

                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(result);
                }
            };
        }
    }, {
        key: "dispose",
        value: function dispose() {

            if (this.dataSource) {
                this.dataSource.close();
            }
        }
    }, {
        key: "connect",
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(name) {
                var mongodb;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;
                                _context4.next = 3;
                                return db.connect();

                            case 3:
                                mongodb = _context4.sent;


                                this.source = mongodb.collection(name);

                                if (this.dataSource) {
                                    this.dataSource.close();
                                }

                                this.dataSource = mongodb;
                                _context4.next = 13;
                                break;

                            case 9:
                                _context4.prev = 9;
                                _context4.t0 = _context4["catch"](0);
                                _context4.next = 13;
                                return _promise2.default.reject(new Error(_context4.t0));

                            case 13:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[0, 9]]);
            }));

            function connect(_x3) {
                return _ref4.apply(this, arguments);
            }

            return connect;
        }()
    }]);
    return Collection;
}();

exports.default = Collection;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _collection = __webpack_require__(2);

var _collection2 = _interopRequireDefault(_collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _collection2.default("customers");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = babel-runtime/core-js/promise;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _collection = __webpack_require__(2);

var _collection2 = _interopRequireDefault(_collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _collection2.default("charges");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _hapi = __webpack_require__(8);

var Hapi = _interopRequireWildcard(_hapi);

var _paymentService = __webpack_require__(9);

var _paymentService2 = _interopRequireDefault(_paymentService);

var _collections = __webpack_require__(15);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootRoute = "/api";

var server = new Hapi.Server();

if (process.env.PORT) {
    server.connection({ port: process.env.PORT });
} else {
    server.connection({ port: process.env.PORT || 3001, host: process.env.HOST || 'localhost' });
}
server.register([{
    register: __webpack_require__(17),
    options: {
        "headers": ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-Language", "Accept-Encoding", "Access-Control-Request-Headers", "Access-Control-Request-Method", "DNT", "Connection", "Host", "Origin", "Refferer", "User-Agent"],
        origins: ['http://localhost:3000'] //, "http://apptivator.cloudvireo.com", "https://apptivator.cloudvireo.com", "http://www.apptivator.cloudvireo.com", "https://www.apptivator.cloudvireo.com"]
    }
}, {
    register: __webpack_require__(18),
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
    path: rootRoute + "/appContents",
    handler: {
        await: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(request, reply) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _collections.appContentsCollection.save(request.payload);

                            case 3:
                                _context.next = 8;
                                break;

                            case 5:
                                _context.prev = 5;
                                _context.t0 = _context["catch"](0);
                                return _context.abrupt("return", reply(_context.t0));

                            case 8:
                                return _context.abrupt("return", reply().code(201));

                            case 9:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 5]]);
            }));

            function _await(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return _await;
        }()
    }
});

server.route({
    method: 'GET',
    path: rootRoute + "/appContents",
    handler: {
        await: function () {
            var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(request, reply) {
                var appContents;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return _collections.appContentsCollection.getAll();

                            case 3:
                                appContents = _context2.sent;


                                console.log(appContents);

                                return _context2.abrupt("return", reply(appContents));

                            case 8:
                                _context2.prev = 8;
                                _context2.t0 = _context2["catch"](0);
                                return _context2.abrupt("return", reply(_context2.t0));

                            case 11:
                                return _context2.abrupt("return", reply().code(201));

                            case 12:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 8]]);
            }));

            function _await(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return _await;
        }()
    }
});

server.route({
    method: 'POST',
    path: rootRoute + "/payments",
    handler: {
        await: function () {
            var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(request, reply) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                _context3.next = 3;
                                return _paymentService2.default.makePayment(request.payload.token, request.payload.email);

                            case 3:
                                _context3.next = 8;
                                break;

                            case 5:
                                _context3.prev = 5;
                                _context3.t0 = _context3["catch"](0);
                                return _context3.abrupt("return", reply(_context3.t0));

                            case 8:
                                return _context3.abrupt("return", reply().code(201));

                            case 9:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[0, 5]]);
            }));

            function _await(_x5, _x6) {
                return _ref3.apply(this, arguments);
            }

            return _await;
        }()
    }
});

server.route({
    method: 'GET',
    path: rootRoute + "/payments",
    handler: {
        await: function () {
            var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(request, reply) {
                var charges;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _collections.chargesCollection.getAll();

                            case 2:
                                charges = _context4.sent;


                                console.log(charges);

                                return _context4.abrupt("return", reply(charges));

                            case 5:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function _await(_x7, _x8) {
                return _ref4.apply(this, arguments);
            }

            return _await;
        }()
    }
});

server.route({
    method: 'GET',
    path: rootRoute + "/customers",
    handler: {
        await: function () {
            var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(request, reply) {
                var customers;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return _collections.customersCollection.getAll();

                            case 2:
                                customers = _context5.sent;


                                console.log(customers);

                                return _context5.abrupt("return", reply(customers));

                            case 5:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function _await(_x9, _x10) {
                return _ref5.apply(this, arguments);
            }

            return _await;
        }()
    }
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = hapi;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _stripe = __webpack_require__(10);

var _customersCollection = __webpack_require__(3);

var _customersCollection2 = _interopRequireDefault(_customersCollection);

var _chargesCollection = __webpack_require__(5);

var _chargesCollection2 = _interopRequireDefault(_chargesCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stripe = new _stripe.Stripe("sk_test_OHx1Z0IcyDglKviPsmA8ZEtQ");

exports.default = {

    makePayment: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(token, email) {
            var customer, charge;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return stripe.customers.create({
                                email: email,
                                source: token
                            });

                        case 3:
                            customer = _context.sent;


                            _customersCollection2.default.save(customer);

                            _context.next = 7;
                            return stripe.charges.create({
                                amount: 100,
                                currency: "usd",
                                customer: customer.id
                            });

                        case 7:
                            charge = _context.sent;


                            _chargesCollection2.default.save(charge);
                            _context.next = 14;
                            break;

                        case 11:
                            _context.prev = 11;
                            _context.t0 = _context["catch"](0);
                            throw _context.t0;

                        case 14:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 11]]);
        }));

        function makePayment(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return makePayment;
    }()
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = stripe;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = babel-runtime/helpers/classCallCheck;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = babel-runtime/helpers/createClass;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(4);

var _promise2 = _interopRequireDefault(_promise);

var _mongodb = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url =  true ? 'mongodb://40.78.96.177:27017/apptivator' : 'mongodb://localhost:27017/apptivator';

var db = null;

exports.default = {
    connect: function connect() {
        return new _promise2.default(function (resolve, reject) {
            try {
                _mongodb.MongoClient.connect(url, function (err, mongodb) {

                    if (err) {
                        reject(err);
                    }

                    db = mongodb;

                    resolve(mongodb);
                });
            } catch (e) {
                reject(new Error(e));
            }
        });
    },

    disconnect: function disconnect() {
        if (db) {
            db.close();
            db = null;
        }
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = mongodb;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _customersCollection = __webpack_require__(3);

Object.defineProperty(exports, "customersCollection", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_customersCollection).default;
  }
});

var _chargesCollection = __webpack_require__(5);

Object.defineProperty(exports, "chargesCollection", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_chargesCollection).default;
  }
});

var _appContentsCollection = __webpack_require__(16);

Object.defineProperty(exports, "appContentsCollection", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_appContentsCollection).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _collection = __webpack_require__(2);

var _collection2 = _interopRequireDefault(_collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _collection2.default("appContents");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = hapi-cors;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = overjoy-await;

/***/ })
/******/ ]);