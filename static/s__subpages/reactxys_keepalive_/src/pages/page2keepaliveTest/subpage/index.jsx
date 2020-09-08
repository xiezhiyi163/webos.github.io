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
 //
 class Page2sub extends React.Component {
	 render(){
		 return (
			 <div style={{paddingTop:30}}>		 
				<div style={{textAlign:'center'}}>
					缓存测试二级
				</div>			 
			 </div>
		 )
	 }
	 constructor(props) {
		 super(props)
		 this.state = {
			 
		 }
	 }
	 componentDidMount(){
		 
	 }
 }
 
 export default Page2sub