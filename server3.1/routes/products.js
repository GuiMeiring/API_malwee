const Joi=require('joi');
const knl =require('../knl');

knl.post('products', async(req, resp) =>{
    const schema =Joi.object({
        description:
        Joi.string().min(1).max(100).required(),
        salePrice:
        Joi.number().min(1).required(),

    })
    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.Products.findAll({
        where:{
            description: req.body.description,
            salePrice: req.body.salePrice
        }
    });

    knl.createException('0006', '', !knl.objects.isEmptyArray(result));

    const products =knl.sequelize().models.Products.build({
        description: req.body.description,
        salePrice: req.body.salePrice,
        status:1
    });

    await products.save();
    resp.end();

})
knl.get('products/:id', async (req, resp)=>{
    const result =await knl.sequelize().models.Products.findAll({
        where: {
            id:req.params.id,
            status:1
        }
    });
    resp.json(result);
    resp.end();
})
knl.patch('products/:id', async(req,resp)=>{
    const result = await knl.sequelize().models.Products.update({
        status:0
    },
    {
    where:{
        id:req.params.id
        }
    });
    resp.json(result);
    resp.end();
})
knl.delete('products/:id', async(req,resp)=>{
    const result = await knl.sequelize().models.Products.destroy({
        where:{
            id: req.params.id
        }
    });
    resp.json(result);
    resp.end();
})