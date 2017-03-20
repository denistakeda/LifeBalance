import {assert} from 'chai';
import * as UsersController from './users.controller';

describe('user.controller', () => {
  describe('getViewer', () => {
    it('should return resolved promise when user is defined', (done) => {
      UsersController.getViewer(null, null, {user: 'mock-user'})
        .then(() => done());
    });

    it('should return current user from a context', (done) => {
      UsersController.getViewer(null, null, {user: 'mock-user'})
        .then(user => assert.equal(user, 'mock-user'))
        .then(() => done());
    });

    it('should return rejected promise when user is not defined', (done) => {
      UsersController.getViewer(null, null, {})
        .catch(() => done());
    });
  });
});
