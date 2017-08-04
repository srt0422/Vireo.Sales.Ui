import apiCall from "./apiCall";

const content = {};

export function* save() {
    apiCall("appContents", "POST", content);
}

export function setField(field) {
    if (field.name.indexOf("[") !== -1) {

        let keys = field.name.split(".");
        let firstKey = keys[0];
        let secondKey = keys[1];
        let index = -1;
        let bracketStart = secondKey.indexOf("[");

        if (bracketStart !== -1) {

            index = secondKey.substr(bracketStart + 1, 1);

            secondKey = secondKey.substr(0, secondKey.length - 3);
        }

        content[firstKey] = content[firstKey] || {};

        content[firstKey][secondKey] = content[firstKey][secondKey] || [];

        content[firstKey][secondKey][index] = field.value;
    }
    else if (field.name.indexOf(".") !== -1) {

        let keys = field.name.split(".");
        let firstKey = keys[0];
        let secondKey = keys[1];

        content[firstKey] = content[firstKey] || {};

        content[firstKey][secondKey] = field.value;
    }
    else {
        content[field.name] = field.value;
    }
}

export function fetch() {
    return content;
}

export default {
    setField,
    fetch
};