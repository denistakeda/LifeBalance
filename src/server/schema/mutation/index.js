import {
  GraphQLObjectType,
} from 'graphql';
import signUp from './signUp';
import signIn from './signIn';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signUp,
    signIn,
  }
});

export default mutation;
