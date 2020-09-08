import ar from './lazyloadrouter.js';

var _router = [{
	component:ar(() => import('../pages/page1/index.jsx')),
	path:'/index',
	children:[{
		component:ar(() => import('../pages/page1/subpage/index.jsx')),
		path:'/index/sub',
	}]
 },{
	 component:ar(() => import('../pages/page3/index.jsx')),
	 path:'/index3',
 }];
 
 export default _router