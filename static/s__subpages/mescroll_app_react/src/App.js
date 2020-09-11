import React from 'react';
import './App.css';
import {
	HashRouter as Router,//BrowserRouter为正常url模式，不过不会配置最好不要使用，js跳转配置麻烦
	Route,
	Link,
	Switch,
	Redirect,
	withRouter,
}from 'react-router-dom';        
import { renderRoutes } from 'react-router-config';
import { createBrowserHistory } from 'history';
import router from './router/index.js'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
			{renderRoutes(router)}
		</Router>
      </div>
    </div>
  );
}

export default App;
