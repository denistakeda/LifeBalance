import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLID,
} from 'graphql';

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    email: {type: new GraphQLNonNull(GraphQLString)},
    name: {type: GraphQLString},
    imageUrl: {type: GraphQLString},
  },
});

export default userType;
