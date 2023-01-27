import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux'
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// library helpers that run before action hits reducer, dispatch - middleware - reducer

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));


// depricated method, just for learning practices. Needs to be replaced by using redux-toolkit configuration.
// optional second parameter
export const store = createStore(rootReducer, undefined, composedEnhancers)
