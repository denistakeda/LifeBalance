
export const promisify = (cb) => (...args) => {
  try {
    return Promise.resolve(cb(...args));
  } catch (err) {
    return Promise.reject(err);
  }
};
