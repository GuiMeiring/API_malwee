const Joi = require('joi');
const knl = require('../knl');

knl.post('subgroup', async(req, resp) => {
    const schema = Joi.object({
        nameProduct : Joi.string().min(1).max(100).required(),

    })

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.Subgroup.findAll({
        where : {
            nameProduct : req.body.nameProduct
        }
    });

    knl.createException('0006', '', !knl.objects.isEmptyArray(result));

    const subgroup = knl.sequelize().models.Subgroup.build({
        nameProduct : req.body.nameProduct,
        status   : 1
    });

    await subgroup.save();
    resp.end();
})

knl.get('subgroup', async(req, resp) => {
    const result = await knl.sequelize().models.Subgroup.findAll({
        where : {
            status : 1
        }
    });
    
    resp.json(result);
    resp.end();
})

knl.get('subgroup/:id', async(req, resp) => {
    const result = await knl.sequelize().models.Subgroup.findAll({
        where : {
            id : req.params.id,
            status : 1
        }
    });
    
    resp.json(result);
    resp.end();
})

knl.patch('subgroup/:id', async (req, resp) => {
    const result = await knl.sequelize().models.Subgroup.update({
        status : 0
       }, 
       {
        where : {
            id : req.params.id
        }
       });
       resp.json(result);
       resp.end();
    });