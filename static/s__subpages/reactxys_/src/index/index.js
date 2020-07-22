import React from 'react';
import ReactDOM from 'react-dom';
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
 import _router from '../App_router.js'
import {Menu,Row,Col,Button} from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css';

const { SubMenu } = Menu;

//传值测试

//父传子

class BroA extends React.Component {
	constructor(props){
		super(props)
	}

	state = {
		
	}			
	componentDidMount() {}
	render() {
		return(
			<div>{this.props.bro}</div>
		)
	}
}

class FaA extends React.Component {
	constructor(props){
		super(props)
	}
	state = {
		fa:3
	}
	componentDidMount() {}
	render() {
		return(
			<div>
				<BroA bro={this.state.fa}/>
			</div>
		)
	}
}

// 子传父

class BroB extends React.Component {
	constructor(props){
		super(props)
	}

	state = {
		
	}
	componentDidMount() {
		this.props.bro(6)
	}
	render() {
		return(
			<div></div>
		)
	}
}

class FaB extends React.Component {
	constructor(props){
		super(props)
	}
	state = {
		fas:3
	}
	fa = a =>{
		this.setState({
			fas:a
		})
	}
	componentDidMount() {}
	render() {
		return(
			<div>
				<BroB bro={this.fa}/>
				{this.state.fas}
			</div>
		)
	}
}

// 兄弟传值

class BroC2 extends React.Component {
	constructor(props){
		super(props)
	}
	state = {
		
	}
	componentDidMount() {}
	render(){
		return(
		<div>{this.props.bro2}</div>)
	}
}

class BroC1 extends React.Component {
	constructor(props){
		super(props)
	}
	state = {
		
	}
	componentDidMount() {
		this.props.bro1(9)
	}
	render(){
		return(
			<div></div>
		)
	}
}

class FaC extends React.Component {
	constructor(props){
		super(props)
	}
	state = {
		fas:0
	}
	handle = a =>{
		this.setState({
			fas:a
		})
	}
	componentDidMount() {}
	render(){
		return(
		<div>
			<BroC1 bro1={this.handle}/>
			<BroC2 bro2={this.state.fas}/>
		</div>
		)
	}
}

// /* 正文布局测试 */

class Menus extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  componentDidMount() {}
  render() {
    return (
		<div style={{padding:'0 0 0 150px'}}>
			<div style={{position:'absolute',left:0,top:0,width:'150px'}}>
				<div className="logo" />
			</div>
			<Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
			<Menu.Item key="mail" icon={<MailOutlined />}>
			  <Link to='/page2'>Nav One</Link>
			</Menu.Item>
			<Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
			  Nav Two
			</Menu.Item>
			<SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
			  <Menu.ItemGroup title="Item 1">
				<Menu.Item key="setting:1">Option 1</Menu.Item>
				<Menu.Item key="setting:2">Option 2</Menu.Item>
			  </Menu.ItemGroup>
			  <Menu.ItemGroup title="Item 2">
				<Menu.Item key="setting:3">Option 3</Menu.Item>
				<Menu.Item key="setting:4">Option 4</Menu.Item>
			  </Menu.ItemGroup>
			</SubMenu>
			<Menu.Item key="alipay">
			  <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
				Navigation Four - Link
			  </a>
			</Menu.Item>
			</Menu>
		 </div>
    );
  }
}

class LayoutContwrap extends React.Component {
	state = {
		
	}
	componentDidMount() {}
	render(){
		return(
			<div>
				{/*三列、三行*/}
				<Row>
					<Col style={{height:'100px',backgroundColor:'#ccc'}} xs={24} sm={24} md={7} lg={6} xl={5} xxl={4}>
					</Col>
					<Col style={{height:'100px',backgroundColor:'#eee'}} xs={24} sm={24} md={10} lg={12} xl={14} xxl={16}>
						父传子:<FaA />
					</Col>
					<Col style={{height:'100px',backgroundColor:'#ccc'}} xs={24} sm={24} md={7} lg={6} xl={5} xxl={4}>
					</Col>
				</Row>
				{/*三列、右边为例右边跑下来、三行*/}
				<hr/>
				<Row>
					<Col style={{height:'100px',backgroundColor:'#ccc'}} xs={24} sm={24} md={7} lg={6} xl={5} xxl={4}>
					</Col>
					<Col style={{height:'100px',backgroundColor:'#eee'}} xs={24} sm={24} md={17} lg={18} xl={14} xxl={16}>
						子传父：<FaB/>
					</Col>
					<Col style={{height:'100px',backgroundColor:'#ccc'}} xs={24} sm={24} md={24} lg={24} xl={5} xxl={4}>
					</Col>
				</Row>
				{/*三列、右边为例右边消失、三行*/}
				<hr/>
				<Row>
					<Col style={{height:'100px',backgroundColor:'#ccc'}} xs={24} sm={24} md={7} lg={6} xl={5} xxl={4}>
					</Col>
					<Col style={{height:'100px',backgroundColor:'#eee'}} xs={24} sm={24} md={17} lg={18} xl={14} xxl={16}>							
						兄弟传值:<FaC/>
					</Col>
					<Col style={{height:'100px',backgroundColor:'#ccc'}} xs={24} sm={0} md={0} lg={0} xl={5} xxl={4}>
						_
					</Col>
				</Row>
			</div>
		)
	}
}

//二级路由测试

class SecondRoute extends React.Component {
	constructor(props){
		super(props)
	}
	state = {
		
	}
	componentDidMount(){
		window.location.hash = '#/index/page1'
	}
	render(){
		return(
			<Router>
				<div style={{height:'15px'}}></div>,
				<div>
					<Link to='/index/page1'><Button>二级1</Button></Link>
					<Link to='/index/page2'><Button>二级2</Button></Link>
					{ renderRoutes(this.props.bro.children)}
				</div>
			</Router>
		)
	}
}

class index extends React.Component {
	constructor(props){
		super(props)
		this.state = {/* 二级路由测试的路由必须在暴露的组件那里获取 */
			routes:props.route
		}
	}
	render(){
	  return (
		<div className="index">
			<Menus/>
			<LayoutContwrap/>
			<SecondRoute bro={this.state.routes}/>
		</div>
	  );		
	}
}

export default index;