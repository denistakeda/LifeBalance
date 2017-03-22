import {
  GraphQLObjectType,
} from 'graphql';
import viewerType from '../object-types/viewer-type';
import {verifyUser} from '../../db/controllers/users.controller';
import {nodeField} from '../../init/relay-node';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    node: nodeField,
    viewer: {
      type: viewerType,
      resolve: verifyUser,
    },
  }
});

export default query;
