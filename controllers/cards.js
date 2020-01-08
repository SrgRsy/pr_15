/* eslint-disable no-undef */
// импорт модели
const Card = require('../models/card');
const NotFoundError = require('../errors/not-found-err');

module.exports.createCard = (req, res) => {
  Card.create({
    name: req.body.name,
    link: req.body.link,
    owner: req.user._id })
    .then(card => res.send({ data: card }))
    .catch(next);
};


module.exports.deleteCard = (req, res) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (card.owner.toString() === req.user._id) {
        Card.findByIdAndRemove(req.params.cardId)
          .then((cardRemove) => res.status(500).res.send({ remove: cardRemove }))
          .catch(next);
      } else  {
        next(new NotFoundError('Недостаточно прав'));
      }
    })
};


module.exports.getCard = (req, res) => {
  Card.find({})
    .then(card => res.send({ data: card }))
    .catch(next);
};


