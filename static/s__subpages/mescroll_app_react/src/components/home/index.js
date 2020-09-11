import React from 'react';
import {
	HashRouter as Router,//BrowserRouter为正常url模式，不过不会配置最好不要使用，js跳转配置麻烦
	Route,
	Link,
	Switch,
	Redirect,
	withRouter,
}from 'react-router-dom';        
import { renderRoutes } from 'react-router-config';
import { createBrowserHistory } from 'history';//
import './index.css'

var _this = ''
var mescroll = window.mescroll;

class Home extends React.Component {
	constructor(props) {
	    super(props);
		this.state = {
			firstload:0,//阻止重置的时候调用上拉加载回调
			loadmescroll:'',
			arr:[]
		}
		_this = this
	}
	setarr = function(){
		for(var i = 0; i< 100;i++){
			this.state.arr.push(i)
			this.setState({
				arr:this.state.arr
			})
		}
	}
	downcb = function(){
		var ls = _this.state.loadmescroll
		setTimeout(function(){
			_this.setState({firstload:0});
			ls.resetUpScroll(false)
			ls.setPageNum(2)//只影响上拉加载的
			/* 假设没数据 */
			// ls.showEmpty()
			// ls.endSuccess(0)
		},1000)
	}
	upcb = function(page){
		var ls = _this.state.loadmescroll
		if(_this.state.firstload == 0){
			_this.setState({firstload:1})
			ls.endErr()
			return;
		}
		console.log(page.num-1)
		/* 假设有数据 */
		if(100>page.num*page.size){
			ls.endSuccess(100)
			setTimeout(function() {
				document.querySelector('.mescroll-upwarp').style.visibility = 'visible'
				document.querySelector('.upwarp-progress').style.visibility = 'hidden'
			}, 0);
		}else{
			ls.endSuccess(100)
			ls.showNoMore()
		}
		/* 假设没数据 */
		// ls.endSuccess(0)
		/* 请求失败 */
		// ls.endErr()
	}	
	loadingmescroll = function(){
		var emptyobj = {
				warpId : 'emptywrap' ,
				icon : null ,
				tip : "暂无相关数据~" ,
				btntext : "" ,
				btnClick : null,
				supportTap : false
			},
			toloadmescroll = new mescroll('mescroll',{
				down:{
					callback:function(){						
						_this.downcb()							
					},
					empty:emptyobj
				},
				up:{
					callback:function(page){
						_this.upcb(page)
					},
					empty:emptyobj,
					page:{
						num:1,//强制从1开始，初始化完也是1，所以滑到底部得要页码-1才能正常，除非第一页从1算起
						size:10
					},
					noMoreSize:1,
					offset:0,
					htmlLoading:'<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中..</p>',
					htmlNodata:'<p class="upwarp-nodata">-- END --</p>'
				}
			});
			_this.setState({
				loadmescroll:toloadmescroll
			})
	}
	componentDidMount(){
		this.setarr()
		setTimeout(this.loadingmescroll,0)
	}
	render(){
		return(
			<div id="mescroll" className='mescroll'>
				{this.state.arr.map(function(v,i){
					return(
						<div key={i}>{v}</div>
					)
				})}
				<div id="emptywrap"></div>
			</div>
		)
	}
}

export default Home