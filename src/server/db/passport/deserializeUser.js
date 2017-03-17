import User from '../models/user.model';

export default (id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
};
