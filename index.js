"use strict";

module.exports = parse;

module.exports.parse = parse;

module.exports.parseFile = parseFile;

var debug = require("debug")("live-front");
var LSON = require("lson");
var Promise = require("bluebird");

var readFile = Promise.promisify(require("fs").readFile);

var regex = /^---\s*^((?:.|\s)*)\s^---\s*^/m;

function parse(data) {
  debug(arguments);
  var lson = null;

  data = data.replace(regex, function (match, capture) {
    lson = LSON.parse(capture);
    return "";
  });

  return Promise.resolve({
    object: lson,
    fileContent: data
  });
}

function parseFile(filePath, encoding) {
  return readFile(filePath, {
    encoding: encoding || "utf-8"
  }).then(function (data) {
    return parse(data);
  });
}
