"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    it("[1,2,3,4,5,4,3,2,1] To '1'", function(){
        sinon.spy(console, 'log');
        main([1,2,3,4,5,4,3,2,1]);
        var result = _.flatten(console.log.args).join("\n");
        var expect_string = '5';

        expect(expect_string).to.equal(result);
    });
});