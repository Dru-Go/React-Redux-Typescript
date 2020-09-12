import {createStore, combineReducers } from 'redux'
import Reducer from './reducers'
import { devToolsEnhancer } from 'redux-devtools-extension'

export const rootReducer = combineReducers({
    employees: Reducer
})

export type AppState = ReturnType<typeof rootReducer> 

export const store = createStore(rootReducer, devToolsEnhancer({}));