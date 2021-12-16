import { action } from 'typesafe-actions';
import { ProductsTypes, ProductsData, RequestData } from './types';

export const loadRequest = ({ page, filter, query }: RequestData) =>
  action(ProductsTypes.LOAD_REQUEST, { page, filter, query });
export const loadSuccess = (data: ProductsData) =>
  action(ProductsTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(ProductsTypes.LOAD_FAILURE);
