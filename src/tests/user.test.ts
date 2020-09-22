import request from 'supertest'
import {app} from '../app'


describe('GET /', () => {
    it('hello world endpoint', async () => {
        const result = await request(app).get('/');
        expect(result.text).toEqual('Hello World!');
        expect(result.status).toEqual(200);
    })
})

describe('/createUser', () => {
    it('should create user', async () => {
        const result = await request(app)
        .post('/createUser')
        .send({
            name: "Victor",
            email: "victor@mail.com"
        })
        expect(result.status).toEqual(200);
    })

})