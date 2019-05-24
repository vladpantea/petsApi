'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /store/order', function() {
    describe('tests for post', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('post', 'http://localhost:8090/store/order', { 
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for "Invalid Order"', function() {
            var response = request('post', 'http://localhost:8090/store/order', { 
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });
    
    });
});