exports.id = 0;
exports.modules = {

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__db__ = __webpack_require__(8);
﻿

class Collection {

    constructor(name) {
        this.name = name;
    }

    async save(entity) {

        await this.connect(this.name);

        var result = await new Promise((resolve, reject) => {
            try {
                this.source.insertOne(entity, this.getInsertCallback(resolve, reject));
            }
            catch (e) {
                reject(new Error(e));
            }
        });

        await this.dispose();

        return result;
    }

    async get(id) {

        await this.connect(this.name);

        var result = await new Promise((resolve, reject) => {
            try {
                return this.source.findOne({ id: id }, this.getFetchCallback(resolve, reject));
            }
            catch (e) {
                reject(new Error(e));
            }
        });

        await this.dispose();

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

        return await __WEBPACK_IMPORTED_MODULE_0__db__["a" /* default */].connect().then(mongodb => {
            this.source = mongodb.collection(name);
            this.dataSource = mongodb;
        })
            .catch(e => new Error(e));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Collection;


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongodb__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongodb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongodb__);
﻿

const url = process.env.production ? 'mongodb://localhost:27017/apptivator' : 'mongodb://localhost:27017/apptivator';

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

/***/ 9:
/***/ (function(module, exports) {

module.exports = mongodb;

/***/ })

};