"use strict";

var utils = global.utils;

var lf = utils.lf;

var testFiles = utils.testFiles;

describe("this module", function () {

  it("should return a function with two sub-functions", function () {
    expect(lf).toEqual(jasmine.any(Function));
    expect(lf.parse).toEqual(jasmine.any(Function));
    expect(lf.parseFile).toEqual(jasmine.any(Function));
  });

});

describe("the 'parse' function", function () {

  it("should be the default function", function () {
    expect(lf).toEqual(lf.parse);
  });

});

describe("the 'parseFile' function", function () {

  it("should not be the default function", function () {
    expect(lf).not.toEqual(lf.parseFile);
  });

  it("should correctly parse the first test file (.jade)", function (done) {
    lf.parseFile(testFiles[0]).then(function (result) {
      expect(result.object).toEqual({
        a: 1
      });

      expect(result.fileContent.trimRight()).toEqual("h1 Test 1");

      done();
    }).catch(function (error) {
      done.fail(error.toString());
    });
  });

  it("should correctly parse the second test file (.html)", function (done) {
    lf.parseFile(testFiles[1]).then(function (result) {
      expect(result.object).toEqual({
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

      expect(result.fileContent.trimRight()).toEqual("<h1>Test 2</h1>");

      done();
    }).catch(function (error) {
      done.fail(error.toString());
    });
  });

});
