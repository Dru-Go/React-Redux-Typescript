import { createStore, combineReducers, applyMiddleware } from 'redux'
import Reducer from '../reducers/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger';
import rootSagas from '../sagas/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware, logger));

export const rootReducer = combineReducers({
    employees: Reducer
})

export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSagas)

export type AppState = ReturnType<typeof rootReducer>