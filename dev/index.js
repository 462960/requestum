import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
require('./sass/styles');
import { App } from './components/App';
//import tasks from './data/tasksList';
import {data} from './data/data';

// const root = (
//   <HashRouter>
//     <Apple tasks={data}/>
//   </HashRouter>
// 	);

ReactDOM.render(<App data={data}/>,
document.querySelector("#app"));



