export default class StatusRepository{
    async findOne(id){
        const product = await this.productRepository().find({where:{id:id}},{relations:['category','product']})
        return product
    }
}