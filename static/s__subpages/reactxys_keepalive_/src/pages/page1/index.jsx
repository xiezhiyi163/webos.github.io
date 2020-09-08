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
  import CacheRoute, { CacheSwitch,dropByCacheKey, getCachingKeys } from 'react-router-cache-route'
 //状态管理
 import { connect } from 'react-redux';
 import {testaction} from '../../redux/action.js'
 //
import indexcss from './static/css/index.css'
//
class Page1 extends React.Component {
 	render(){
		return(
			<Router>
			
				<div style={{paddingTop:30}}>
					<div style={{margin:'0 30px 30px',padding:20,backgroundColor:'lightblue'}}>
						<span onClick={this.toindex2.bind(this)}>index2</span>
					</div>
					<div style={{margin:'0 30px 30px',padding:20,backgroundColor:'lightblue'}}>响应式table(非移动端)</div>				
					{this.state.list.map(function(v,i){
						return (<div key={i} style={{margin:'0 30px'}}>
						<div className='table'>
							<div className='tl table-celll tablecell200'>
								<div>
									<p></p>
									l
								</div>
							</div>
							<div className='tm table-cell'>
								<div>
									<p></p>
									m
								</div>
							</div>
							<div className='tr table-cellr tablecell220'>
								<div>r</div>
							</div>
						</div>
					</div>
					)})}
					<div style={{margin:'30px 30px',padding:20,backgroundColor:'lightblue'}}>状态管理测试</div>
					父级:{this.props.testchange.testchange}
					子级:{renderRoutes(this.state.route.children)}
				</div>
			</Router>
		)
	}
 	constructor(props) {
 		super(props)
		this.state = {
			list:[0,0],
			route:props.route,
		}
		this.toindex2 = function(){
			dropByCacheKey('index2')
			window.location.hash = '/index2/sub'
		}
 	}
	componentDidMount(){
		var _this = this
		//状态管理
		setTimeout(function() {
			_this.props.testaction_fn(20)
			console.log(_this.props.testchange)			
		}, 0);
	}
 }
 
export default connect((state) => {
	return {testchange:state/*返回的全部方法，要用哪个就拿哪个出来赋给它，必须要对应reducers里面的方法名*/}
},(dispatch, ownProps) => {//将dispatch映射到组件的props当中
	return {
		testaction_fn (data) {//自定义属性，然后方法传入data，去触发action的dispatch并获取之前state存在的reducer里面有对应的方法，以便调用
			dispatch(testaction(data))
		},
	}
})(Page1)