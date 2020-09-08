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
 import links from './router/router.js'
 import './App.css';
//缓存起来的路由
 import CacheRoute, { CacheSwitch,dropByCacheKey, getCachingKeys } from 'react-router-cache-route'
 import ar from './router/lazyloadrouter.js';

function App() {
  return (
    <div className="App">
      <div className="App-header">
		<Router>
			{renderRoutes(links)}
			<CacheSwitch>
				<CacheRoute path='/index2' component={ar(() => import('./pages/page2keepaliveTest/index.jsx'))} when="back" cacheKey="index2"/>				
			</CacheSwitch>
		</Router>
      </div>	  
    </div>
  );
}

export default App;
