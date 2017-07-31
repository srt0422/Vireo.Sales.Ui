import rewire from "rewire";
import { assert } from "chai";
import { mock } from "sinon";
import customersCollection from "../collections/customersCollection";

describe("customersCollectionTests tests (integration)", () => {

    beforeEach(() => {
        customersCollection.connect("collection");
    });

    afterEach(() => {
        customersCollection.dispose();
    });

    it("should add customer", async () => {

        try {
            setTimeout(async () => {

                try {

                    await customersCollection.save({ id: 1 });

                    var entity = await customersCollection.get(1);

                    assert.equal(entity.id, 1);
                }
                catch (e) {
                    await Promise.reject(new Error(e));
                }

            }, 3000);
        }
        catch (e) {
            await Promise.reject(new Error(e));
        }

    }).timeout(10000);
});