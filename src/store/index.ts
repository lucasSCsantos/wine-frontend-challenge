import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { CountState } from "./count/types";
import rootReducer from "./rootReducer";

export interface ApplicationState {
  count: CountState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools()
);

export default store;
