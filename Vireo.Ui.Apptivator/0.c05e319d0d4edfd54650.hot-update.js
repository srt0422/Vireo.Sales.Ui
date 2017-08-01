exports.id = 0;
exports.modules = {

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongodb__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongodb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongodb__);
﻿

const url = process.env.production ? 'mongodb://40.78.96.177:27017/apptivator' : 'mongodb://localhost:27017/apptivator';

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

/***/ })

};