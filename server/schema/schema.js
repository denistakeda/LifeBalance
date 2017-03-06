import { GraphQLSchema } from 'graphql';
import query from './query/index';
import mutation from './mutation/index';

const schema = new GraphQLSchema({
  query,
  mutation,
});

export default schema;
