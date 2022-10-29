const knl = require('../knl');
const securityConsts = require('../consts/security-consts');
const Joi = require('joi');
const jwt = require('../utils/jwt');
const md5 = require('../utils/md5-pass');

knl.post('logon', async (req, resp) => {
    const schema = Joi.object({
        name:
        Joi.string().min(1).max(100).required(),
    });

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.Clients.findAll({
        where : {
            name : req.body.name
        }
    })

    knl.createException('0005', '', knl.objects.isEmptyArray(result));
    
    const client = knl.objects.copy(result[0]);
    delete client.name;
    delete client.createdAt;
    delete client.updatedAt;

    resp.json({
        token : jwt.sign(client.id),
        client  : client
    });
    
}, securityConsts.USER_TYPE_PUBLIC);