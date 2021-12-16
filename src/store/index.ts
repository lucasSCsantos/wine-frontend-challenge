import { createWrapper } from 'next-redux-wrapper';
import { AnyAction, applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { Task } from 'redux-saga';
import { ProductsState } from './products/types';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export interface ApplicationState {
  products: ProductsState;
}

export interface SagaStore extends Store<ApplicationState, AnyAction> {
  sagaTask: Task;
}

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store: Store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const storeWrapper = createWrapper<Store<ApplicationState>>(makeStore, {
  debug: false
});
