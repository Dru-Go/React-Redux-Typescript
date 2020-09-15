import { createStore, combineReducers, applyMiddleware } from 'redux'
import Reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware, logger));

export const rootReducer = combineReducers({
    employees: Reducer
})

// sagaMiddleware.run(rootSagas)

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, enhancer);