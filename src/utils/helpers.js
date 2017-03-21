import R from 'ramda';

export const logThrowError = R.curry((msg, err) => { // eslint-disable-line import/prefer-default-export
  console.error(msg + ':', err);
  throw new Error(msg);
});
