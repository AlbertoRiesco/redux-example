import { createStore, combineReducers } from 'redux';
import atmosphereReducer from '../ducks/atmosphere';

const rootReducer = combineReducers({
    atmosphereReducer
});

export const store = createStore(rootReducer);