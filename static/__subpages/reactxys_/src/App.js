import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
	 HashRouter as Router,//BrowserRouter为正常url模式，不过不会配置最好不要使用，js跳转配置麻烦
	 Route,
	 Link,
	 Switch,
	 Redirect,
	 withRouter,
 }from 'react-router-dom';      
 import { HashRouter as CacheRouter, Route as CacheRoute } from 'react-keeper'
 import { renderRoutes } from 'react-router-config';
 import { createBrowserHistory } from 'history';
  import _router from './App_router.js'
  //用作缓存的组件
 import page2 from './index1/index.js'

 //安装路由模块和路由设置，再搞个对象进行懒加载封装，再拿进来到这里用
function App() {
  return (
		<Router>
			<div id='cachewrap'>
				{renderRoutes(_router)/* 缓存的路径写在下面 */}
			</div>
			<div id='cachewrap2' style={{display:'none'}}>
				<CacheRouter>
					<CacheRoute cache path='/page2' component={page2}/>
				</CacheRouter>
			</div>
			{
						/*后台操作系统的登录判断：
						 sessionStorage.loginId?
						'':<Redirect to='/login'/> */
			    	}
		</Router>
  );
}

export default App;