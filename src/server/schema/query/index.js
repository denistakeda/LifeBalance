import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import userType from '../object-types/user-type';
import {me} from '../../db/controllers/users.controller';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return 'world';
      }
    },
    me: {
      type: userType,
      resolve: me,
    }
  }
});

export default query;
