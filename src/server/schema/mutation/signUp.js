import {
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import userType from '../object-types/user-type';
import * as UserController from '../../db/controllers/users.controller';

const signUp = mutationWithClientMutationId({
    name: 'SignUp',
    inputFields: {
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)},
    },
    outputFields: {
        user: {type: userType},
        token: {type: GraphQLString},
    },
    mutateAndGetPayload: UserController.signUp,
});

export default signUp;
