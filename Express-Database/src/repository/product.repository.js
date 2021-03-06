import {getRepository} from 'typeorm'
import  Product from '../models/product.model'

export default class ProductRepository{
    productRepository(){
        return getRepository(Product)
    }

    async findOne(id){
        const product = await this.productRepository().find({where:{id:id}},{relations:['category','status']})
        return product
    }

    async findAllProduct(){
        const product = await this.productRepository().find({relations:['category','status']})
        return product
    }

    async createProduct(product){
        return await this.productRepository().save(product)
    }    











    // findProductById(id) {
    //     return new Promise(function (resolve, reject) {
    //         connection.query('SELECT * FROM ms_product WHERE id=?', [id],
    //             (err, rows, fields) => {
    //                 if (err) {
    //                     reject(err)
    //                 } else {
    //                     resolve(rows)
    //                 }
    //             })
    //     })
    // }

    // createProduct(product) {
    //     return new Promise(function (resolve, reject) {
    //         connection.query('INSERT INTO ms_product(product_id, product_name,price,category_id,status_id) values(?,?,?,?,?)', [product.productId, product.productName,product.price, product.categoryId,product.statusId],
    //             (err, result) => {
    //                 if (err) {
    //                     reject(err)
    //                 } else {
    //                     resolve(result)
    //                 }
    //             })
    //     })
    // }

    // updateProduct(product) {
    //     return new Promise(function (resolve, reject) {
    //         connection.query('UPDATE ms_product SET category_id =? WHERE id = ?', [product.categoryId,product.id],
    //             (err, result) => {
    //                 if (err) {
    //                     reject(err)
    //                 } else {
    //                     resolve(result)
    //                 }
    //             })
    //     })
    // }

    // deleteProduct(product) {
    //     return new Promise(function (resolve, reject) {
    //         connection.query('UPDATE ms_product SET status_id = 2 WHERE id = ?', [product.id],
    //             (err, result) => {
    //                 if (err) {
    //                     reject(err)
    //                 } else {
    //                     resolve(result)
    //                 }
    //             })
    //     })
    // }

    // findAllProduct() {
    //     return new Promise(function (resolve, reject) {
    //         connection.query('SELECT p.id,p.product_id,p.product_name,p.price,c.category_name,s.status FROM ms_product p JOIN ms_category c ON p.category_id = c.id JOIN ms_status s ON s.id =c.status_id',
    //             (err, rows, fields) => {
    //                 if (err) {
    //                     reject(err)
    //                 } else {
    //                     resolve(rows)
    //                 }
    //             })
    //     })
    // }
}