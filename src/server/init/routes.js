/**
 * Routes for express app
 */
import graphqlHTTP from 'express-graphql';
import schema from '../schema/schema';
import {extractUserMiddleware} from '../db/mongo/controllers/users.controller';

export default (app) => {
  app.use(
    '/graphql',
    extractUserMiddleware,
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  );
};
