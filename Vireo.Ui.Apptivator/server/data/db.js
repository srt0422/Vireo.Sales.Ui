import { MongoClient } from "mongodb";

const url = process.env.NODE_ENV === "production" ? 'mongodb://40.78.96.177:2000/apptivator' : 'mongodb://localhost:27017/apptivator';

let db = null;

export default {
    connect: function () {
        return new Promise((resolve, reject) => {
            try {
                MongoClient.connect(url, function (err, mongodb) {

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
}