import store from './store.js'
export function testaction(data){
	 return (dispatch, getState) => {
		//。。。
		dispatch({ type: 'testchange1', data: data })
	}
}
export function testaction2(data){
	 return (dispatch, getState) => {
		//。。。
		dispatch({ type: 'testchange1', data: data })
	}
}