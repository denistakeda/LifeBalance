import {assert} from 'chai';
import * as UsersController from './users.controller';

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

    it('should return rejected promise when user is not defined', (done) => {
      UsersController.verifyUser(null, null, {})
        .catch(() => done());
    });
  });
});
