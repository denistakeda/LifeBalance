/**
 * Routes for express app
 */
import unsupportedMessage from '../db/unsupportedMessage';
import { controllers, passport as passportConfig } from '../db';
import graphqlHTTP from 'express-graphql';
import schema from '../schema/schema';

const usersController = controllers && controllers.users;


export default (app) => {
  // user routes
  if (usersController) {
    app.post('/login', usersController.login);
    app.post('/signup', usersController.signUp);
    app.post('/logout', usersController.logout);
  } else {
    console.warn(unsupportedMessage('users routes'));
  }

  app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }))

};
