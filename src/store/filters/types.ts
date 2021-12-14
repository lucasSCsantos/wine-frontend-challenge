// Action types
export enum FiltersTypes {
  SET_FILTER = '@products/SET_FILTER',
  SET_QUERY = '@products/SET_QUERY'
}

// Data types
// export type FiltersData = {};

// State type
export interface FiltersState {
  readonly filter: string | string[];
  readonly query: string | string[];
}
