import { all, takeLatest } from 'redux-saga/effects';
import load from './products/sagas';
import { ProductsTypes } from './products/types';

export default function* rootSaga() {
  return yield all([takeLatest(ProductsTypes.LOAD_REQUEST, load)]);
}
