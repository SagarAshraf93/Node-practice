const _ = require("lodash");

const item = [1, [2, [3, [4, 5]]]];

const test = _.flattenDeep(item);
console.log(test);
