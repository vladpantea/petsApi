'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /user/login', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://localhost:8090/user/login', { 
                'qs': {"username":"ut sint magna enim nostrud","password":"nostrud"},
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for "Invalid username/password supplied"', function() {
            var response = request('get', 'http://localhost:8090/user/login', { 
                'qs': {"username":"pariatur aliquip anim sit Ut","password":"aliquip eu aute pariatur"},
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });
    
    });
});