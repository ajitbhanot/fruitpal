var expect  = require('chai').expect;
var request = require('request');

it('Check Page Title', function(done) {
    request('http://localhost:3002' , function(error, response, body) {
        expect(body).to.equal('Enter Fruitpal;');
        done();
    });
});

it('Main page status', function(done) {
    request('http://localhost:3002' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
