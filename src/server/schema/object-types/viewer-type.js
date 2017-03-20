import {
  GraphQLObjectType,
} from 'graphql';
import userType from './user-type';
import {me} from '../../db/controllers/users.controller';

const viewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: {
    user: {
      type: userType,
      resolve: me,
    }
  },
});

export default viewerType;
