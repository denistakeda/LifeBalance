import {assert} from 'chai';
import sinon from 'sinon';
import * as UsersController from './users.controller';
import User from '../models/user.model';

describe('user.controller', () => {
  describe('me', () => {
    it('should return the user from a context', () => {
      const user = 'mock-user';
      assert.equal(UsersController.me(null, null, {user}), user);
    });
  });

  describe('verifyUser', () => {
    it('should return resolved promise when user is defined', (done) => {
      UsersController.verifyUser(null, null, {user: 'mock-user'})
        .then(() => done());
    });

    it('should return resolved promise with null when user is not defined', (done) => {
      UsersController.verifyUser(null, null, {})
        .then((user) => {
          assert.isNull(user);
          done();
        });
    });
  });

  describe('signIn', () => {
    const user = {
      _id: 'someUserId',
      email: 'some@email',
      password: 'somePassword',
    };

    beforeEach(() => {
      User.findOne = sinon.stub().returns(Promise.resolve(user));
      User.comparePassword = sinon.stub().returns(Promise.resolve(user));
    });

    it('should return user and token', (done) => {
      UsersController.signIn({email: user.email, password: user.password})
        .then((result) => {
          assert.deepEqual(result.user, user);
          assert.isNotNull(result.token);
          done();
        });
    });
  });
});
