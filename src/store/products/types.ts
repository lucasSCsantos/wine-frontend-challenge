import { BaseProps } from '../../__mocks__/base';

// Action types
export enum ProductsTypes {
  LOAD_REQUEST = '@products/LOAD_REQUEST',
  LOAD_SUCCESS = '@products/LOAD_SUCCESS',
  LOAD_FAILURE = '@products/LOAD_FAILURE'
}

// Data types
export type ProductsData = BaseProps;

export interface RequestData {
  page: string | string[];
  filter?: string | string[];
  query?: string | string[];
}

// State type
export interface ProductsState {
  readonly data: ProductsData | {};
  readonly loading: boolean;
  readonly error: boolean;
}
