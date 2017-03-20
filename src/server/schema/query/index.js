import {
  GraphQLObjectType,
} from 'graphql';
import userType from '../object-types/user-type';
import {getViewer} from '../../db/controllers/users.controller';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    viewer: {
      type: userType,
      resolve: getViewer,
    },
  }
});

export default query;
