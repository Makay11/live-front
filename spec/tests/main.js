"use strict";

var lf = global.utils.lf;

describe("this module", function () {

  it("should return a function with two sub-functions", function () {
    expect(lf).toEqual(jasmine.any(Function));
    expect(lf.parse).toEqual(jasmine.any(Function));
    expect(lf.parseFile).toEqual(jasmine.any(Function));
  });

});
