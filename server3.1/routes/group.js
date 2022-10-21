const Joi=require('joi');
const knl =require('../knl');

knl.post('group', async(req, resp) =>{
    const schema =Joi.object({
        description:
        Joi.string().min(1).max(100).required(),

    })
    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.Group.findAll({
        where:{
            description: req.body.description
        }
    });

    knl.createException('0006', '', !knl.objects.isEmptyArray(result));

    const group =knl.sequelize().models.Group.build({
        description: req.body.description,
        status:1
    });
   
    await group.save();

})
knl.get('group', async (req, resp)=>{
    const result =await knl.sequelize().models.Group.findAll({
        where: {
            status:1
        }
    });
    resp.json(result);
})
knl.patch('group/:id', async(req,resp)=>{
    const result = await knl.sequelize().models.Group.update({
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
knl.delete('group/:id', async(req,resp)=>{
    const result = await knl.sequelize().models.Group.destroy({
        where:{
            id: req.params.id
        }
    });
    resp.json(result);
    resp.end();
})