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
    name: {type: new GraphQLNonNull(GraphQLString)},
    email: {type: new GraphQLNonNull(GraphQLString)},
    imageUrl: {type: GraphQLString},
  },
});

export default userType;
