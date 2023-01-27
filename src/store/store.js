import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux'
// import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

// library helpers that run before action hits reducer, dispatch - middleware - reducer

//middleware function always follow same signature, 3 functions that return from one another:currying
const loggerMiddleware = (store) => (next) => (action) => {
  if(!action.type) {
    return next(action);
  }
  console.log('type', action.type)
  console.log('payload', action.payload)
  console.log('currentState: ', store.getState());

  next(action);

  console.log('next state: ', store.getState());
}

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['user'] //values you don't want to persist
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));


// depricated method, just for learning purposes. Needs to be replaced by using redux-toolkit configuration.
// optional second parameter
export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store);
