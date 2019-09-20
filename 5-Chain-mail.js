 // include the Lo-Dash library
 const _ = require("lodash");

 const worker = function (arr) {
     // do work; return stuff
     return _.chain(arr)
         .map(item => item + 'Chained')
         .map(item => item.toUpperCase())
         .sortBy()
         .value();
 };

 // export the worker function as a nodejs module
 module.exports = worker;