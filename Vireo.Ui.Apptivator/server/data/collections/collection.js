import DB from "../db";

let db = DB;

export default class Collection {

    constructor(name) {
        this.name = name;
    }

    async save(entity) {

        await this.connect(this.name);

        let result = await new Promise((resolve, reject) => {
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

        let result = await new Promise((resolve, reject) => {
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

    async getAll() {

        await this.connect(this.name);

        let result = await new Promise((resolve, reject) => {

            try {
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