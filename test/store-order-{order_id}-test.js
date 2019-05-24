'use strict';
var mocha = require('mocha');
var chakram = require('chakram');
var request = chakram.request;
var expect = chakram.expect;

describe('tests for /store/order/{order_id}', function() {
    describe('tests for get', function() {
        it('should respond 200 for "successful operation"', function() {
            var response = request('get', 'http://localhost:8090/store/order/1', { 
                'time': true
            });

            expect(response).to.have.status(200);
            return chakram.wait();
        });


        it('should respond 400 for "Invalid ID supplied"', function() {
            var response = request('get', 'http://localhost:8090/store/order/2', { 
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 404 for "Order not found"', function() {
            var response = request('get', 'http://localhost:8090/store/order/1', { 
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
    
    describe('tests for delete', function() {
        it('should respond 400 for "Invalid ID supplied"', function() {
            var response = request('delete', 'http://localhost:8090/store/order/aliquip', { 
                'time': true
            });

            expect(response).to.have.status(400);
            return chakram.wait();
        });


        it('should respond 404 for "Order not found"', function() {
            var response = request('delete', 'http://localhost:8090/store/order/dolorLoremconsequatnullaquis', { 
                'time': true
            });

            expect(response).to.have.status(404);
            return chakram.wait();
        });
    
    });
});