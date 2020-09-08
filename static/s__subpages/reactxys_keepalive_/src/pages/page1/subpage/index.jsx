import React from 'react';
import {
	 HashRouter as Router,//BrowserRouter为正常url模式，不过不会配置最好不要使用，js跳转配置麻烦
	 Route,
	 Link,
	 Switch,
	 Redirect,
	 withRouter,
 } from 'react-router-dom';        
 import { renderRoutes } from 'react-router-config';
 import { createBrowserHistory } from 'history';
 //状态管理
 import { connect } from 'react-redux';
 import {testaction2} from '../../../redux/action.js'
 //
 class Subpage extends React.Component {
	 render(){
	 	return(
	 		<span>
	 			333
	 		</span>
	 	)
	 }
	 constructor(props) {
	 	super(props)
	 }
	 state = {
		res:''
	 }
	 componentDidMount(){	
		var _this = this
		//状态管理
		 setTimeout(function() {
			_this.props.testaction2_fn(20)
			console.log(_this.props.testchange)			
		 }, 1000);
	 }
 }
 
 export default connect((state) => {
	return {testchange:state/*返回的全部方法，要用哪个就拿哪个出来赋给它，必须要对应reducers里面的方法名*/}
},(dispatch, ownProps) => {//将dispatch映射到组件的props当中
	return {
		testaction2_fn (data) {//自定义属性，然后方法传入data，去触发action的dispatch并获取之前state存在的reducer里面有对应的方法，以便调用
			dispatch(testaction2(data))
		},
	}
})(Subpage)