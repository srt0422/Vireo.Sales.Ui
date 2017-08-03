import rewire from "rewire";
import { assert } from "chai";
import { mock } from "sinon";
import customersCollection from "../collections/customersCollection";

describe("customersCollectionTests tests (integration)", () => {

    beforeEach(async () => {
        await customersCollection.connect("collection");
    });

    afterEach(async () => {
        customersCollection.dispose();
    });

    it("should add customer", async () => {
        try {

            await customersCollection.save({ id: 1 });

            var entity = await customersCollection.get(1);

            assert.equal(entity.id, 1);
        }
        catch (e) {
            await Promise.reject(new Error(e));
        }
    }).timeout(10000);

    it("should get customers", async () => {
        try {

            let customers = await customersCollection.getAll();

            assert.isNotNull(customers);
            assert.isAtLeast(customers.length, 1);
        }
        catch (e) {
            await Promise.reject(new Error(e));
        }
    }).timeout(10000);
});