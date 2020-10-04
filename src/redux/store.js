import {createStore} from 'redux';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

const initialState = {}

export const store = createStore(persistedReducer, initialState)
export const persistor = persistStore(store);


export default store