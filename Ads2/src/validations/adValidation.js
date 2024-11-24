import Joi from 'joi';

export const adSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    imageURL: Joi.string().uri().required(),
    targetURL: Joi.string().uri().required(),
    owner: Joi.string().required()
});
