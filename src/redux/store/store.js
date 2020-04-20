import { createStore, combineReducers, applyMiddleware } from 'redux';
import atmosphereReducer from '../ducks/atmosphere';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    atmosphereReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));