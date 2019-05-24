'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /user/createWithArray', function() {
    describe('tests for post', function() {
        it('should respond default for "successful operation"', function() {
            var response = request('post', 'http://localhost:8090/user/createWithArray', { 
                'time': true
            });

            return chakram.wait();
        });
    
    });
});