import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './App_redux_reducers.js'
let store = createStore(
    reducers,
    applyMiddleware(thunk)
)
export default store