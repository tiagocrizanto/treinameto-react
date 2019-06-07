import { createStore, combineReducers, compose } from 'redux';

import placesReducer from './reducers/places';

const rootReducer = combineReducers({
    places: placesReducer
});

let composeEnhancers = compose;

//Attach o redux ao react-native-debugger
if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
};

export default configureStore;
