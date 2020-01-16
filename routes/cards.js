const cardsRout = require('express').Router();
const { celebrate, Joi } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);

const { createCard, getCard, deleteCard } = require('../controllers/cards');

cardsRout.post('/', celebrate({
  body: Joi.object().keys({
    link: Joi.string().domain({ tlds: { allow: ['com', 'net', 'ru'] } }),
    name: Joi.string().required().min(2).max(30),
    cardId: Joi.objectId()
  }),
}), createCard);


cardsRout.delete('/:cardId',celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required()
  }),
}), deleteCard);


cardsRout.get('/', getCard);


module.exports = cardsRout;