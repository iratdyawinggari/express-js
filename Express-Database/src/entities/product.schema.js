import {EntitySchema} from 'typeorm';
import Product from '../models/product.model'

const ProductSchema = new EntitySchema({
    name:'Product',
    target:Product,
    tableName: 'ms_product',
    columns:{
        id:{
            primary: true,
            type:'int',
            generated:true
        },
        productId:{
            name:'product_id',
            type: 'varchar'
        },
        productName:{
            name:'product_name',
            type: 'varchar'
        },
        price:{
            name:'price',
            type: 'int'
        }
    },
    relations: {
        category:{
            target:'Category',
            type:'many-to-one',
            eager:true,
            joinColumn:{name:'category_id'}
        },
        status:{
            target:'Status',
            type:'many-to-one',
            eager:true,
            joinColumn:{name:'status_id'}
        }
    }
})

export default ProductSchema;