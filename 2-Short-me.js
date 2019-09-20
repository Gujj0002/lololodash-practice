const _ = require("lodash");

const sorting = function (collection) {
    return _.sortBy(collection, item => -item.quantity);

   
};

module.exports = sorting;