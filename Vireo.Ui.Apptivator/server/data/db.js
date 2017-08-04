import { MongoClient } from "mongodb";

const url = process.env.NODE_ENV === "production" ? 'mongodb://apptivator:5ZAmXndm3JPqYLRKFtULq5FviVbA2palr2kTlWMVqDVw9eEGBUUZCAOOzhAeJxlT0T6mhEBHxWgqH1T8lTLhNQ==@apptivator.documents.azure.com:10255/?ssl=true&replicaSet=globaldb' : 'mongodb://localhost:27017/apptivator';

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