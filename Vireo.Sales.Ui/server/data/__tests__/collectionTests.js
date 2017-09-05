import rewire from "rewire";
import { assert } from "chai";
import { mock } from "sinon";

describe("collectionTests tests (unit)", () => {

    let collectionRewired;
    let Collection = null;
    let collection = null;

    beforeEach(() => {
        collectionRewired = rewire("../collections/collection");
        Collection = collectionRewired.default;
        collection = new Collection("test");
    });

    afterEach(() => {
        collectionRewired = null;
        Collection = null;
        collection = null;
    });

    it("should save entity", async () => {

        try {
            let testEntity = { id: 1 };

            let collectionStub = { insertOne: (entity, cb) => { cb(null, { insertedId: entity.id }); } };
            collection.source = collectionStub;

            collectionRewired.__set__("db", {
                connect: () => (Promise.resolve({
                    collection: () => collectionStub,
                    close: () => { }
                })),
            });

            let id = await collection.save(testEntity);

            assert.isNotNull(id);
            assert.equal(id, 1)
        }
        catch (e) {
            await Promise.reject(new Error(e));
        }

    }).timeout(10000);
});