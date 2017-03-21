import R from 'ramda';
import {
  fromGlobalId,
  nodeDefinitions,
} from 'graphql-relay';
import {getModels} from '../db/models/index';
import schema from '../schema/schema';

const models = getModels();

export const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => R.pipe(
    () => fromGlobalId(globalId),
    localId => models.find(m => m.modelName === localId.type).findById(localId.id)
  )(globalId),

  // Matches DB models to GraphQL types by name
  (obj) => R.pipe(
    () => models.find(m => obj instanceof m),
    m => schema.getTypeMap()[m.modelName]
  )(obj)
);
