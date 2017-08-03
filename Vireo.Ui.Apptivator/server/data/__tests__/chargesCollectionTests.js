import rewire from "rewire";
import { assert } from "chai";
import { mock } from "sinon";
import chargesCollection from "../collections/chargesCollection";

describe("chargesCollectionTests tests (integration)", () => {
    
    beforeEach(() => {
        chargesCollection.connect("charges");
    });

    afterEach(() => {
        chargesCollection.dispose();
    });

    it("should add charge", async () => {

        try {
            setTimeout(async () => {

                try {
                    await chargesCollection.save({ id: 1 });

                    var entity = await chargesCollection.get(1);

                    assert.equal(entity.id, 1);
                }
                catch (e) {
                    await Promise.reject(new Error(e));
                }

            }, 5000);
        }
        catch (e) {
            await Promise.reject(new Error(e));
        }

    }).timeout(10000);

    it("should get charges", async () => {
        try {

            let charges = await chargesCollection.getAll();

            assert.isNotNull(charges);
            assert.isAtLeast(charges.length, 1);
        }
        catch (e) {
            await Promise.reject(new Error(e));
        }
    }).timeout(10000);
});