import React from 'react';
import {GoodsTable} from './GoodsTable';
import {Footer} from './Footer';


export const App = (props) => 
	<div className="wrapper">
	<GoodsTable {...props}/>
	<Footer/>
	<a className="github" target="_blank" href="https://github.com/462960/requestum">GitHub</a>
	</div>