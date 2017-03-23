export const HOST = process.env.HOSTNAME || 'localhost';
export const PORT = process.env.PORT || '3000';
export const ENV = process.env.NODE_ENV || 'development';
export const BACKEND_URL = process.env.BACKEND_URL ||
  (ENV === 'development' ? `http://${HOST}:${PORT}/graphql` : 'https://life-balance.herokuapp.com/graphql');

export const GOOGLE_ANALYTICS_ID = process.env.GOOGLE_ANALYTICS_ID || null;

export const SECRET_KEY = process.env.SECRET_KEY || 'Super Secret';

