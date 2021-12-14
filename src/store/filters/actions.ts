import { action } from 'typesafe-actions';
import { FiltersTypes } from './types';

export const setFilter = payload => action(FiltersTypes.SET_FILTER, payload);
export const setQuery = payload => action(FiltersTypes.SET_QUERY, payload);
