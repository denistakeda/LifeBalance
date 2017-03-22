import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';
import {
  globalIdField,
} from 'graphql-relay';
import {
  nodeInterface,
} from '../../init/relay-node';

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: globalIdField('User'),
    email: {type: new GraphQLNonNull(GraphQLString)},
    name: {type: GraphQLString},
    imageUrl: {type: GraphQLString},
  },
  interfaces: [nodeInterface]
});

export default userType;
