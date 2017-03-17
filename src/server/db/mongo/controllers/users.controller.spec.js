import * as UsersController from './users.controller';
import {assert} from 'chai';

describe('user.controller', () => {
  describe('me', () => {
    it('should return the user from a context', () => {
      const user = 'mock-user';
      assert.equal(UsersController.me(null, null, {user}), user);
    });
  })
});
