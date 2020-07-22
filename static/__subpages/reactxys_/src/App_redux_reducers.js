import { combineReducers } from 'redux'
import states from './App_redux_state.js'

function setLog_s(state = states.m,action){
    switch(action.type){
        case 'log':
            return state
        default:
            return state
    }
}

function setLog_a(state = states.m2,action){
    switch(action.type){
        case 'logM':
			return state + action.data
        default:
            return state
    }
}

export default combineReducers({
    setLog_s,
    setLog_a,
})