'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /pet', function() {
    describe('tests for put', function() {
        it('should respond 400 for "Invalid ID supplied"', function() {
            var response = request('put', 'http://localhost:8090/pet', { 
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 404 for "Pet not found"', function() {
            var response = request('put', 'http://localhost:8090/pet', { 
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });


        it('should respond 405 for "Validation exception"', function() {
            var response = request('put', 'http://localhost:8090/pet', { 
                'time': true
            });

            expect(response).to.have.status(405);
            return chakram.wait();
        });
    
    });
    
    describe('tests for post', function() {
        it('should respond 405 for "Invalid input"', function() {
            var response = request('post', 'http://localhost:8090/pet', { 
                'time': true
            });

            expect(response).to.have.status(405);
            return chakram.wait();
        });
    
    });
});