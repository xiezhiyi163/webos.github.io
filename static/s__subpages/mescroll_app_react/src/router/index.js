import React from 'react';
import ar from './lazyloadroute.js'

export default [
	{
		component:ar(() => import('../components/home/index.js')),
		path:'/',
		exact: true
	}
]