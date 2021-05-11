//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
    str.charAt(5).toUpperCase();
    str = str.replace(/\s/g, '');
    return str
}
