'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /pet/findByTags', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://localhost:8090/pet/findByTags', { 
                'qs': {"tags":["aute irure","in voluptate in Ut","ipsum enim mollit"]},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for "Invalid tag value"', function() {
            var response = request('get', 'http://localhost:8090/pet/findByTags', { 
                'qs': {"tags":[]},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });
    
    });
});