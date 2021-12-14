import { HYDRATE } from 'next-redux-wrapper';
import { Reducer } from 'redux';
import { FiltersState, FiltersTypes } from './types';

const INITIAL_STATE: FiltersState = {
  filter: '',
  query: ''
};

const reducer: Reducer<FiltersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.filters };
    case FiltersTypes.SET_FILTER:
      return { ...state, filter: action.payload };
    case FiltersTypes.SET_QUERY:
      return { ...state, query: action.payload };
    default:
      return state;
  }
};

export default reducer;
