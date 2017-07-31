import apiCall from "./apiCall";

export default {
    create: function* (token, email) {

        apiCall("payment", "POST", {token: token, email: email});
    }
};