 import React,{Component} from 'react';
 import ReactDOM from 'react-dom';
 //懒加载组装的路由路径配置
 
 function ar(getComponent) {
	 return class AsyncComponent extends React.Component {
		 static Component = null;
		 state = { Component: AsyncComponent.Component };
			 
		 componentWillMount() {
		 if (!this.state.Component) {
			 getComponent().then(({default: Component}) => {
				 AsyncComponent.Component = Component
				 this.setState({ Component })
				 })
			 }
		 }
		 render() {
			 const { Component } = this.state
			 if (Component) {
				 return <Component {...this.props} />
			 }
			 return null
		 }
	 }
 }
 
var _router = [{
	component:ar(() => import('./index/index.js')),
	path:'/',
	exact: true
},{
	component:ar(() => import('./index/index.js')),
	path:'/index',
	children:[{
		component:ar(() => import('./index/_page1.js')),
		path:'/index/page1'
	},{
		component:ar(() => import('./index/_page2.js')),
		path:'/index/page2'
	}]
}]

export default _router
