'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /pet/{petId}', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://localhost:8090/pet/62643426', { 
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for "Invalid ID supplied"', function() {
            var response = request('get', 'http://localhost:8090/pet/-80649971', { 
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 404 for "Pet not found"', function() {
            var response = request('get', 'http://localhost:8090/pet/20892403', { 
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for post', function() {
        it('should respond 405 for "Invalid input"', function() {
            var response = request('post', 'http://localhost:8090/pet/-25437031', { 
                'time': true
            });

            expect(response).to.have.status(405);
            return chakram.wait();
        });
    
    });
    
    describe('tests for delete', function() {
        it('should respond 400 for "Invalid pet value"', function() {
            var response = request('delete', 'http://localhost:8090/pet/37185695', { 
                'headers': {"api_key":"amet Excepteu"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });
    
    });
});