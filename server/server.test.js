const request = require('supertest');
const expect = require('expect');
let app = require('./server').app;

it('should have response Hello World', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toMatchObject(
                {
                    error: 'Page not found!'
                }
            )
        })
        .end(done)
})


it('should have response user object', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body[0]).toMatchObject(
                {
                    name: 'yousuf',
                    age: 24
                }
            )
        })
        .end(done)
})