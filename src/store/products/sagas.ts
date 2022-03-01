import { call, put } from 'redux-saga/effects';
import getByFilter from '../../services/getByFilter';
import getByPage from '../../services/getByPage';
import getBySearch from '../../services/getBySearch';
import { loadFailure, loadSuccess } from './actions';
import { ProductsTypes, RequestData } from './types';

export interface PayloadType {
  type: ProductsTypes.LOAD_REQUEST;
  payload: RequestData;
}

export default function* load(action: PayloadType) {
  try {
    const { page, filter, query } = action.payload;
    let response;
    if (!query && !filter) response = yield call(getByPage, page);
    if (filter) response = yield call(getByFilter, page, filter);
    if (query) response = yield call(getBySearch, page, query);

    yield put(loadSuccess(response));
  } catch (error) {
    yield put(loadFailure());
  }
}
