import React from 'react';
import {
	 HashRouter as Router,//BrowserRouter为正常url模式，不过不会配置最好不要使用，js跳转配置麻烦
	 Route,
	 Link,
	 Switch,
	 Redirect,
	 withRouter,	
 } from 'react-router-dom';     
 import {Prompt} from 'react-router';     
 import { renderRoutes } from 'react-router-config';
 import { createBrowserHistory } from 'history';
 //缓存起来的路由
  import CacheRoute, { CacheSwitch} from 'react-router-cache-route'
  import ar from '../../router/lazyloadrouter.js';
 class Page2 extends React.Component {
	 render(){
		 return (
			<div>
				<Prompt message={
					() => {
						//写判断逻辑等代码
						// return false;//返回true标示离开当前页面;false表示留在当前页面
						var confirm = window.confirm('确定离开？')
						if(!confirm){
							window.history.go(1);
						}
					}/*如果是自定义弹框,一开始先拿未离开的flag强制false,然后点取消,就go(1),如果是确定,改变flag，就拿地址栏的hash重新附上去就行*/
				} />
				 <div style={{paddingTop:30}}>
					 <div style={{margin:'0 30px 30px',padding:20,backgroundColor:'lightblue'}}>
						详情
					 </div>			 
					<div style={{textAlign:'center'}}>
						缓存页过来的
						<input type="text"/>
					</div>			 
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
		 console.log(1200)
	 }
 }
 
 export default Page2