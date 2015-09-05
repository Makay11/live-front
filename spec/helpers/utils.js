"use strict";

var fs = require("fs");

var utils = global.utils = {};

utils.lf = require("../../index");

utils.testFiles = fs.readdirSync("spec/testFiles").sort(function (s1, s2) {
  return s1.localeCompare(s2);
}).map(function (fileName) {
  return "spec/testFiles/" + fileName;
});
