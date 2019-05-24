'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /pet/{petId}/uploadImage', function() {
    describe('tests for post', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('post', 'http://localhost:8090/pet/58605338/uploadImage', { 
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });
    
    });
});