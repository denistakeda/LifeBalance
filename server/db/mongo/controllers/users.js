import R from 'ramda';
import User from '../models/user';
import {then, catchErr} from '../../../utils/invokers';
import jwt from 'jsonwebtoken';
import {SECRET_KEY} from '../../../../config/env';

export const extractUserMiddleware = (req, res, next) => R.pipe(
  getToken,
  getUserIdByToken,
  userId => User.findById(userId),
  then(
    user => {
      if (!user) next("Wrong token");
      req.user = user;
      next();
    }
  ),
  catchErr(err => next(err))
)(req);

export const signUp = (_, args) => R.pipe(
  // TODO: verify the args
  () => User.create(args),
  then(generateToken)
)(args);

export const signIn = (_, args) => R.pipe(
  () => User.findOne({email: args.email}),
  then(User.comparePassword(args.password)),
  then(generateToken)
)(args);

export const me = (_, __, context) => context.user;

// Private part

const generateToken = user => ({
  user,
  token: jwt.sign(user._id.toString(), SECRET_KEY)
});

const getUserIdByToken = token => jwt.verify(token, SECRET_KEY);

const getToken = req => req.get('token');
