import React from 'react';
import ReactDOM from 'react-dom';
//状态管理引入
import { connect } from 'react-redux'
import {setLog_a} from '../App_redux_action.js'
class subpage1 extends React.Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.props.setLog_a_fn(9)
	}
	render(){
		return(
			<div>
				{this.props.setLog_a}
			</div>
		)		
	}
}

export default connect((state) => {//监听reducer方法,赋给props
	return {setLog_a:state.setLog_a}
},(dispatch, ownProps) => {//将dispatch映射到组件的props当中
	return {
		setLog_a_fn (data) {//自定义属性，然后方法传入data，去触发action的dispatch并获取之前state存在的reducer里面有对应的方法，以便调用
			dispatch(setLog_a(data))
		},
	}
})(subpage1)