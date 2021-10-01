import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import healthReducer from 'src/store/healthCheck';

export const reducers = combineReducers({
  healthState: healthReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducers>;
