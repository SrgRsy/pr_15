const cardsRout = require('express').Router();
const { celebrate, Joi } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);

const { createCard, getCard, deleteCard } = require('../controllers/cards');

cardsRout.post('/', celebrate({
  body: Joi.object().keys({
    link: Joi.string().uri(),
    name: Joi.string().required().min(2).max(30),
  }),
}), createCard);


cardsRout.delete('/:cardId',celebrate({
  params: Joi.object().keys({
    cardId: Joi.objectId()
  }),
}), deleteCard);


cardsRout.get('/', getCard);


module.exports = cardsRout;