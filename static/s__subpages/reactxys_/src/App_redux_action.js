import store from './App_redux_store.js'

function setLog_a(data = null){
	return (dispatch, getState) => {
		//。。。
		dispatch({ type: 'logM', data: data })
	}
}

export {setLog_a}