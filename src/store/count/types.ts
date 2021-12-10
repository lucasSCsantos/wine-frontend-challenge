/*
Action Types
*/
export enum CountTypes {
  ADD = "@count/ADD",
  SUBTRACT = "@count/SUBTRACT",
}

/*
Data types
*/
export interface Count {
  number: number;
}

/*
State type
*/
export interface CountState {
  readonly number: number;
}
