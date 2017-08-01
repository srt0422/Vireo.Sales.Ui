import db from "../db";

export default class Collection {

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

        return await db.connect().then(mongodb => {
            this.source = mongodb.collection(name);
            this.dataSource = mongodb;
        })
            .catch(e => new Error(e));
    }
}