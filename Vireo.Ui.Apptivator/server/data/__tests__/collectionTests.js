import rewire from "rewire";
import { assert } from "chai";
import { mock } from "sinon";
import Collection from "../collections/collection";

describe("collectionTests tests (unit)", () => {

    let collection = null;

    beforeEach(() => {
        collection = new Collection();
    });

    afterEach(() => {
        collection = null;
    });

    it("should save entity", async () => {

        try {
            let testEntity = { id: 1 };

            let collectionStub = { insertOne: (entity, cb) => { cb(null, { insertedId: entity.id }); } };
            collection.source = collectionStub;

            let id = await collection.save(testEntity);

            assert.isNotNull(id);
            assert.equal(id, 1)
        }
        catch (e) {
            await Promise.reject(new Error(e));
        }

    }).timeout(10000);
});