import apiCall from "./apiCall";
import * as appGenerator from "./appGenerator";

export default {

    create: function* (token, email) {

        apiCall("payments", "POST", { token: token, email: email })
            .then(appGenerator.save);
    }

};