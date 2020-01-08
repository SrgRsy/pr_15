const jwt = require('jsonwebtoken');
const AuthorizError = require('../errors/authoriz-err');

module.exports = (req, res, next) => {
  const { NODE_ENV, JWT_SECRET } = process.env;
  const handleAuthError = (res) => {
    return next(new AuthorizError('Авторизуйтесь, пожалуйста'));
  };

  const extractBearerToken = (header) => {
    return header.replace('Bearer ', '');
  };
  const { authorization } = req.headers;
  console.log(authorization);
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return handleAuthError(res);
  }

  const token = extractBearerToken(authorization);
  let payload;

  try {
    payload = jwt.verify(token,  NODE_ENV === 'start' ? JWT_SECRET : 'dev');
  } catch (next) {
    return next(new AuthorizError('Авторизуйтесь'));
  }
  req.user = payload;

  next();
};



