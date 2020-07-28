import request from 'supertest'
import { server } from '../server'
import { clearance, init } from './initializedTest'

server.listen(process.env.APP_PORT)
beforeAll(async (done) => {
    await init()
    done()
})


afterAll(async (done) => {
    await clearance()
    done()
})

describe('product Router Test', () => {
    it('should call/', (done) => {
        request(server)
            .get('/product')
            .end((err, response) => {
                expect(response.statusCode).toEqual(200)
                expect(response.body).toEqual([
                    {
                        id: 1,
                        productId: 'XYZ',
                        productName: 'XYZ',
                        status: 1,
                        category:{
                            id: 1,
                            categoryId: "ABC",
                            categoryName: "ABC"
                        }
                    }
                ])
                done()
            })
    })
})

// describe('product Router post Test', () => {
//     it('should call/', (done) => {
//         request(server)
//             .post('/product/save')
//             .send({
//                 productId: "AOV",
//                 productName: "ABO",
//                 status: 1,
//                 category: {
//                     id: 1,
//                     categoryId: "ABC",
//                     categoryName: "ABC"
//                 }
//             })
//             .end((err, response) => {
//                 expect(response.statusCode).toEqual(200)
//                 expect(response.body).toEqual(
//                     {
//                         id: 2,
//                         productId: "AOV",
//                         productName: "ABO",
//                         status: 1,
//                         category: {
//                             id: 1,
//                             categoryId: "ABC",
//                             categoryName: "ABC"
//                         }
//                     }
//                 )
//                 done()
//             })
//     })
// })

