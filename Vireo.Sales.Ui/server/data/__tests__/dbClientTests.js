import rewire from "rewire";
import { assert } from "chai";

describe("dbClient tests (integration)", () => {

    let dbClientRewired = null;
    let dbClient = null;

    beforeEach(() => {
        dbClientRewired = rewire("../db");
        dbClient = dbClientRewired.default;
    });

    afterEach(() => {
        dbClient.disconnect();
        dbClientRewired = null;
    });

    it("should connect", async () => {

        try {
            let db = await dbClient.connect()

            assert.isNotNull(db);
        }
        catch (e) {
            await Promise.reject(new Error(e));
        }

    }).timeout(5000);

    it("should disconnect", async () => {

        try {
            let db = await dbClient.connect();

            assert.isNotNull(dbClientRewired.__get__("db"));
            assert.equal(db.serverConfig.connections().length, 1);

            dbClient.disconnect();

            assert.equal(db.serverConfig.connections().length, 0);

            assert.isNull(dbClientRewired.__get__("db"));
        }
        catch (e) {
            await Promise.reject(new Error(e));
        }

    }).timeout(5000);
});