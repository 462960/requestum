import React from 'react';
import {GoodsTable} from './GoodsTable';
import {Footer} from './Footer';


export const App = (props) => 
	<div className="wrapper">
	<GoodsTable {...props}/>
	<Footer/>
	</div>