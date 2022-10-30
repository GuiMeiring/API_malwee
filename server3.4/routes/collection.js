const Joi = require('joi');
const knl = require('../knl');

knl.post('collection', async(req, resp) => {
    const schema = Joi.object({
        description : Joi.string().min(1).max(100).required()
    })

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.Collection.findAll({
        where : {
            description : req.body.description
        }
    });

    knl.createException('0006', '', !knl.objects.isEmptyArray(result));

    const collection = knl.sequelize().models.Collection.build({
        description : req.body.description,
        status   : 1
    });

    await collection.save();
    resp.end();
}
)
knl.get('collection/:id', async (req, resp)=>{
    const result =await knl.sequelize().models.Collection.findAll({
        where: {
            id:req.params.id,
            status:1
        }
    });
    resp.json(result);
    resp.end();
})
knl.get('collection', async (req, resp)=>{
    const result =await knl.sequelize().models.Collection.findAll({
        where: {
            status:1
        }
    });
    resp.json(result);
    resp.end();
})
knl.patch('collection/:id', async(req,resp)=>{
    const result = await knl.sequelize().models.Collection.update({
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
knl.put('collection', async(req, resp) => {
    const result = await knl.sequelize().models.Collection.update({
        description:req.body.description,
    }, {
        where : {
        id : req.body.id
    }});
    
    resp.send(result);
});
knl.delete('collection/:id', async(req,resp)=>{
    const result = await knl.sequelize().models.Collection.destroy({
        where:{
            id: req.params.id
        }
    });
    resp.json(result);
    resp.end();
})