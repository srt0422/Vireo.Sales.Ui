import apiCall from "./apiCall";

export default {
    create: function* (token, email) {

        apiCall("payments", "POST", {token: token, email: email});
    }
};