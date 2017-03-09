import R from 'ramda';
import User from '../models/user';
import {then} from '../../../utils/invokers';
import jwt from 'jsonwebtoken';
import {SECRET_KEY} from '../../../../config/env';

const generateToken = user => ({
  user,
  token: jwt.sign(user._id, SECRET_KEY)
});

export const create = R.pipe(
  // TODO: verify the args
  (_, args) => User.create(args),
  then(generateToken)
);

export const signIn = (_, args) => R.pipe(
  () => User.findOne({email: args.email}),
  then(User.comparePassword(args.password)),
  then(generateToken)
)(args);
