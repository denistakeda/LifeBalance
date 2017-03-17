import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';
import userType from '../object-types/user-type';
import * as UserController from '../../db/controllers/users.controller';

const signInPayload = new GraphQLObjectType({
  name: 'SignInPayload',
  fields: {
    user: {type: userType},
    token: {type: GraphQLString},
  }
});

const signIn = {
  args: {
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)},
  },
  resolve: UserController.signIn,
  type: signInPayload,
};

export default signIn;
