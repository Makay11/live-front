"use strict";

var lab = exports.lab = require("lab").script();
var describe = lab.describe;
var it = lab.it;
var expect = require("code").expect;

var lf = require("..");

describe("this module", function () {

  it("should return a function with two sub-functions", function (done) {
    expect(lf).to.be.a.function();
    expect(lf.parse).to.be.a.function();
    expect(lf.parseFile).to.be.a.function();

    done();
  });

  it("should have 'parse' as the default function", function (done) {
    expect(lf).to.equal(lf.parse);
    expect(lf).not.to.equal(lf.parseFile);

    done();
  });

});
