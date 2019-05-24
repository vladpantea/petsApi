'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /user/{username}', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://localhost:8090/user/quis', { 
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for "Invalid username supplied"', function() {
            var response = request('get', 'http://localhost:8090/user/eudolor', { 
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 404 for "User not found"', function() {
            var response = request('get', 'http://localhost:8090/user/dolorelitExcepteurnulla', { 
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for put', function() {
        it('should respond 400 for "Invalid user supplied"', function() {
            var response = request('put', 'http://localhost:8090/user/excommodo', { 
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 404 for "User not found"', function() {
            var response = request('put', 'http://localhost:8090/user/consequatexercitationproidentnon', { 
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for delete', function() {
        it('should respond 400 for "Invalid username supplied"', function() {
            var response = request('delete', 'http://localhost:8090/user/exUtproidentExcepteur', { 
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 404 for "User not found"', function() {
            var response = request('delete', 'http://localhost:8090/user/utea', { 
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
});