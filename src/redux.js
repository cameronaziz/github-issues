import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers';
import rootSaga from './sagas';
import { loadState, persistState } from './persist';

const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(sagaMiddleware)
);

store.subscribe(() => {
    persistState(store.getState())
})

sagaMiddleware.run(rootSaga);

export default store;

