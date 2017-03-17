import graphqlHTTP from 'express-graphql';
import schema from '../schema/schema';
import {extractUserMiddleware} from '../db/controllers/users.controller';

export default (app) => {
  app.use(
    '/graphql',
    extractUserMiddleware,
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
};
