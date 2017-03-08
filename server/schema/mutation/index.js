import {
  GraphQLObjectType,
} from 'graphql';
import signUp from './signUp';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signUp,
  }
});

export default mutation;
