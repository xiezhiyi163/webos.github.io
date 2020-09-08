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
 //缓存起来的路由
  import CacheRoute, { CacheSwitch,dropByCacheKey, getCachingKeys } from 'react-router-cache-route'
  import ar from '../../router/lazyloadrouter.js';
 
 class Page2 extends React.Component {
	 render(){
		 return (
			<Router>
				 <div style={{paddingTop:30}}>
					 <div style={{margin:'0 30px 30px',padding:20,backgroundColor:'lightblue'}}>
						<Link to="/index">index</Link>
					 </div>			 
					<div style={{textAlign:'center'}}>
						缓存测试
						<CacheSwitch>
							<CacheRoute path='/index2/sub' component={ar(() => import('./subpage/index.jsx'))} when="always"/>
						</CacheSwitch>
						<br/>
						<Link to="/index3" style={{color:'white'}}>跳到index3</Link>
					</div>			 
				 </div>
			 </Router>
		 )
	 }
	 constructor(props) {
		 super(props)
		 this.state = {
			 
		 }
	 }
	 componentDidMount(){
		 alert(100)
		 console.log(this.props)
	 }
 }
 
 export default Page2