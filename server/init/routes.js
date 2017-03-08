/**
 * Routes for express app
 */
import graphqlHTTP from 'express-graphql';
import schema from '../schema/schema';

export default (app) => {
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }))
};
