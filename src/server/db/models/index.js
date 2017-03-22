import mongoose from 'mongoose';

export default function loadModels() {
  require('./user.model');
}

export const getModels = () => mongoose.modelNames().map(name => mongoose.model(name));
