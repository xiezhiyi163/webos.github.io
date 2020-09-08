import { combineReducers } from 'redux'
import states from './states.js'
function testchange (state = states.test,action){
	switch (action.type) {
		case 'testchange1':
			return state + action.data
		default:
			return state
	}
}
export default combineReducers({testchange})