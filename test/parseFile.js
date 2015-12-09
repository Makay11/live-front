"use strict";

var fs = require("fs");

var lab = exports.lab = require("lab").script();
var describe = lab.describe;
var it = lab.it;
var expect = require("code").expect;

var lf = require("..");

var files = fs.readdirSync("test/files").sort(function (s1, s2) {
  return s1.localeCompare(s2);
}).map(function (fileName) {
  return "test/files/" + fileName;
});

describe("the 'parseFile' function", function () {

  it("should correctly parse the first test file (.jade)", function (done) {
    lf.parseFile(files[0]).then(function (result) {
      expect(result.object).to.deep.equal({
        a: 1
      });

      expect(result.body.trimRight()).to.equal("h1 Test 1");

      done();
    }).catch(done);
  });

  it("should correctly parse the second test file (.html)", function (done) {
    lf.parseFile(files[1]).then(function (result) {
      expect(result.object).to.deep.equal({
        a: {
          b: "hi",
          c: [
            {
              d: 1
            }, 2, "3", {
              e: {
                f: 4,
                g: 5
              },
              h: ["6", 7, [8, 9]]
            }
          ]
        },
        i: "hey"
      }); // compiled using LiveScript's online compiler at livescript.net

      expect(result.body.trimRight()).to.equal("<h1>Test 2</h1>");

      done();
    }).catch(done);
  });

  it("should correctly parse the third test file (.jade)", function (done) {
    lf.parseFile(files[2], "utf-8").then(function (result) {
      expect(result.object).to.equal(null);

      expect(result.body.trimRight()).to.equal("p Test 3");

      done();
    }).catch(done);
  });

});
