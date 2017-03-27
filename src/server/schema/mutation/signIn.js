import {
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import userType from '../object-types/user-type';
import * as UserController from '../../db/controllers/users.controller';

const signIn = mutationWithClientMutationId({
  name: 'SignIn',
  inputFields: {
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)},
  },
  outputFields: {
    user: {type: userType},
    token: {type: GraphQLString},
  },
  mutateAndGetPayload: UserController.signIn,
});

export default signIn;
