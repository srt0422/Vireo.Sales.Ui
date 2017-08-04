import apiCall from "./apiCall";
import * as appGenerator from "./appGenerator";

export default {

    create: function* (token, email) {

        yield apiCall("payments", "POST", { token: token, email: email });

        yield appGenerator.save();
    }

};