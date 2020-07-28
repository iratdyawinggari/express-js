import { EntitySchema } from 'typeorm';

const ProductSchema = new EntitySchema({
    name: 'Product',
    target: 'Product',
    tableName: 'master_product',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        productId: {
            name: 'product_id',
            type: 'varchar'
        },
        productName: {
            name: 'product_name',
            type: 'varchar'
        },
        status: {
            name: 'status',
            type: 'int'
        }
    },
    relations: {
        category: {
            target: 'Category',
            type: 'many-to-one',
            eager: true,
            joinColumn: { name: 'id' }
        }
    }
});

export default ProductSchema;