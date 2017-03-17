import bcrypt from 'bcrypt-nodejs';
import mongoose from 'mongoose';
import R from 'ramda';
import {promiseConstructor} from '../../../../utils/constructors';

// Other oauthtypes to be added

/*
 User Schema
 */

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  name: String,
});

function encryptPassword(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  return bcrypt.genSalt(5, (saltErr, salt) => {
    if (saltErr) return next(saltErr);
    return bcrypt.hash(user.password, salt, null, (hashErr, hash) => {
      if (hashErr) return next(hashErr);
      user.password = hash;
      return next();
    });
  });
}

/**
 * Password hash middleware.
 */
UserSchema.pre('save', encryptPassword);

/*
 Defining our own custom document instance method
 */
UserSchema.methods = {

};

/**
 * Statics
 */

UserSchema.statics = {
  comparePassword: R.curry(
    (candidatePassword, user) => promiseConstructor(
      (resolve, reject) =>
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
          if (err) return reject(err);
          if (!isMatch) return reject('Incorrect email or password');
          return resolve(user);
        })
    )
  ),
};

export default mongoose.model('User', UserSchema);
