import request from 'supertest'
import { server } from '../server'
import { clearance, init } from './initializedTest'

server.listen(process.env.APP_PORT)
// const userCredentials = {
//     username: 'adoel',
//     password: 'adoel123'
// }
var authenticatedUser = request.agent(server)
beforeAll(async (done) => {
    await init()
    done()
    // authenticatedUser
    //     .post('/auth')
    //     .send(userCredentials)
    //     .end((err, response) => {
    //         expect(response.statusCode).toEqual(200)
    //         done()
    //     })
})
afterAll(async (done) => {
    await clearance()
    done()
})
describe('Category Router Test', () => {
    it('should call/', (done) => {
        request(server)
            .get('/category')
            .end((err, response) => {
                expect(response.statusCode).toEqual(200)
                expect(response.body).toEqual([
                    { id: 1, categoryId: 'ABC', categoryName: 'ABC' }
                ])
                done()
            })
    })
})
