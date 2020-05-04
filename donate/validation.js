//validation
const Joi = require('@hapi/joi');



//register and login validation
const registerValidation = data => {
    const schema = {
        firstname: Joi.string()
            .min(6)
            .required(),
        lastname: Joi.string()
            .min(6)
            .required(),           
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(8)
            .required(),
        number: Joi.string()
            .min(8)
            .required(),
        
    };
    return Joi.validate(data,schema);
};

const loginValidation = data => {
    const schema = {
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(8)
            .required(),
        
    };
    return Joi.validate(data,schema);
};


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
