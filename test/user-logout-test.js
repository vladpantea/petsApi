'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /user/logout', function() {
    describe('tests for get', function() {
        it('should respond default for "successful operation"', function() {
            var response = request('get', 'http://localhost:8090/user/logout', { 
                'time': true
            });

            return chakram.wait();
        });
    
    });
});