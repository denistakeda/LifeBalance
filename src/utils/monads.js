
export const promisify = cb => (...args) => { // eslint-disable-line import/prefer-default-export
  try {
    return Promise.resolve(cb(...args));
  } catch (err) {
    return Promise.reject(err);
  }
};
