import { createStore, Store } from "redux";
import { CountState } from "./count/types";
import rootReducer from "./rootReducer";

export interface ApplicationState {
  count: CountState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
