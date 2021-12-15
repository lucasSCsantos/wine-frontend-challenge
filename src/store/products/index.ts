import { HYDRATE } from 'next-redux-wrapper';
import { Reducer } from 'redux';
import { ProductsState, ProductsTypes } from './types';

const INITIAL_STATE: ProductsState = {
  data: {},
  error: false,
  loading: false
};

const reducer: Reducer<ProductsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.products };
    case ProductsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ProductsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };
    case ProductsTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: {} };
    default:
      return state;
  }
};

export default reducer;
