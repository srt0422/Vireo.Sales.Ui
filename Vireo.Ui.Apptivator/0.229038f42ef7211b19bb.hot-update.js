exports.id = 0;
exports.modules = {

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__db__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__db___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__db__);
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

        return await __WEBPACK_IMPORTED_MODULE_0__db__["default"].connect().then(mongodb => {
            this.source = mongodb.collection(name);
            this.dataSource = mongodb;
        })
            .catch(e => new Error(e));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Collection;


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module parse failed: C:\\Workspace\\Vireo.Ui.Apptivator\\Vireo.Ui.Apptivator\\server\\data\\db.js Unexpected token (3:35)\nYou may need an appropriate loader to handle this file type.\n| ﻿import { MongoClient } from \"mongodb\";\r\n| \r\n| const url = process.env.production 'mongodb://localhost:27017/apptivator' : 'mongodb://localhost:27017/apptivator';\r\n| \r\n| let db = null;\r");

/***/ }),

/***/ 9:
false

};