import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import logger from 'redux-logger';
// import counterReducer from './counter/counter-reducer';
import phonebookReducer from './phonebook/phonebook-reducer';

// withOut toolkit

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   phonebook: phonebookReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// with Toolkit

const store = configureStore({
  reducer: {
    // counter: counterReducer,
    phonebook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export default store;
