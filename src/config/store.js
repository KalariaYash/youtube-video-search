import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers/reducers';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['videos', 'selectedVideo'],
  stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, reducers);
export const store = createStore(pReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);