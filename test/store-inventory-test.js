'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /store/inventory', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://localhost:8090/store/inventory', { 
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });
    
    });
});