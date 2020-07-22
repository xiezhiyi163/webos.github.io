import React from 'react';
import logo from './logo.svg';
import {Button} from 'antd'
import 'antd/dist/antd.css';
import './App2.less';
import './App.less';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
		<Button className="btn">提交</Button>
		<div>
			<Button className="btn1">提交</Button>
			<Button className="btn1">提交</Button>
			<Button className="btn1">提交</Button>
		</div>
      </header>
    </div>
  );
}

export default App;
