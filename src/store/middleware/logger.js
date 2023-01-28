// library helpers that run before action hits reducer, dispatch - middleware - reducer
//middleware function always follow same signature, 3 functions that return from one another:currying
export const loggerMiddleware = (store) => (next) => (action) => {
  if(!action.type) {
    return next(action);
  }
  console.log('type', action.type)
  console.log('payload', action.payload)
  console.log('currentState: ', store.getState());

  next(action);

  console.log('next state: ', store.getState());
}
