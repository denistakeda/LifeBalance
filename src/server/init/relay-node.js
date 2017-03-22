import R from 'ramda';
import {
  fromGlobalId,
  nodeDefinitions,
} from 'graphql-relay';
import {logThrowError} from '../../utils/helpers';
import {then, catchErr} from '../../utils/invokers';
import {promisify} from '../../utils/monads';
import {getModels} from '../db/models/index';
import schema from '../schema/schema';

const models = getModels();

export const {nodeInterface, nodeField} = nodeDefinitions(
  R.pipe(
    fromGlobalId,
    promisify(localId => models.find(m => m.modelName === localId.type).findById(localId.id)),
    catchErr(logThrowError('Model not found by type name'))
  ),

  // Matches DB models to GraphQL types by name
  R.pipe(
    promisify(obj => models.find(m => obj instanceof m)),
    then(m => schema.getTypeMap()[m.modelName]),
    catchErr(logThrowError('Model not found by instance'))
  )
);
