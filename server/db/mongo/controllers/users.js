import R from 'ramda';
import User from '../models/user';
import {then} from '../../../utils/invokers';
import jwt from 'jsonwebtoken';
import {SECRET_KEY} from '../../../../config/env';

export const create = R.pipe(
  // TODO: verify the args
  (_, args) => User.create(args),
  then(user => ({
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
    },
    token: jwt.sign(user._id, SECRET_KEY),
  }))
);
