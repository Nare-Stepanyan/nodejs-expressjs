const path = require("path");

console.log(path.sep);

const base = path.basename("./app.js");
console.log(base);

const absolute = path.resolve(__dirname, "path-module.js");
console.log(absolute);
