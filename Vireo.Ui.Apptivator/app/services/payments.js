import apiCall from "./apiCall";
import * as contactService from "./contactService";

export default {

    create: function* (token, email) {

        yield apiCall("payments", "POST", { token: token, email: email });

        yield contactService.save();
    }

};