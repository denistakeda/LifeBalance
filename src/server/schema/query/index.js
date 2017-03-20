import {
  GraphQLObjectType,
} from 'graphql';
import viewerType from '../object-types/viewer-type';
import {verifyUser} from '../../db/controllers/users.controller';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    Viewer: {
      type: viewerType,
      resolve: verifyUser,
    },
  }
});

export default query;
