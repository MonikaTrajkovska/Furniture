import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { furnitureReducers } from './reducers/furnitureReducers'


const singleReducer = combineReducers({
    furnitureReducers,

})

// Create an epmty store object
const store = createStore(
    singleReducer,
    applyMiddleware(logger)
)

console.log(store.getState())

export default store
