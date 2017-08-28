import apiCall from "./apiCall";

const content = {};

export function* save() {
    apiCall("contact", "POST", {
        ...content,
        from: content.email,
        email: "info@cloudvireo.com"
    });
}

export function setField(field) {
    content[field.name] = field.value;
}

export function fetch() {
    return content;
}

export default {
    setField,
    fetch
};