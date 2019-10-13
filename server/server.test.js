const request = require('supertest');
let app = require('./server').app;

it('should have response Hello World', (done)=>{
    request(app)
        .get('/')
        .expect('Hello world')
        .end(done)
})