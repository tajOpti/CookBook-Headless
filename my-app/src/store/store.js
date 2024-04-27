import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
//import appContextReducer from './reducers/appContextReducer';
import epiContextReducer from './reducers/epiContextReducer';
import epiDataModelReducer from './reducers/epiDataModelReducer';

const rootReducer = combineReducers({
    epiContext: epiContextReducer,
    epiDataModel: epiDataModelReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
