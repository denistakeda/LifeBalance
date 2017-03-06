import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';
import userType from '../object-types/user-type';
import * as UserController from '../../db/mongo/controllers/users';

const signUpPayload = new GraphQLObjectType({
  name: 'SignUpPayload',
  fields: {
    user: {type: userType},
    token: {type: GraphQLString},
  }
});

const signUp = {
  args: {
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)},
  },
  resolve: UserController.create,
  type: signUpPayload,
};

export default signUp;
