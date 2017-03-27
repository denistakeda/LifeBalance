import R from 'ramda';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import {then, catchErr} from '../../../utils/invokers';
import {promisify} from '../../../utils/monads';
import {SECRET_KEY} from '../../../../config/env';

// Private part

const generateToken = user => ({
  user,
  token: jwt.sign(user._id.toString(), SECRET_KEY)
});

const getUserIdByToken = promisify(token => jwt.verify(token, SECRET_KEY));

const getToken = req => req.get('token');

// Public part

export const extractUserMiddleware = (req, res, next) => R.pipe(
  getToken,
  getUserIdByToken,
  then(userId => User.findById(userId)),
  then(
    (user) => {
      req.user = user; // eslint-disable-line no-param-reassign
      next();
    }
  ),
  catchErr(() => next())
)(req);

export const signUp = (_, args) => R.pipe(
  // TODO: verify the args
  () => User.create(args),
  then(generateToken)
)(args);

export const signIn = ({email, password}) => R.pipe(
  () => User.findOne({email}),
  then(user => User.comparePassword(password, user)),
  then(generateToken)
)();

export const me = (_, __, context) => context.user;

export const verifyUser = (_, __, context) => {
  return context.user ? Promise.resolve({}) : Promise.resolve(null);
};
