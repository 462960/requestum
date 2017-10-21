import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
require('./sass/styles');
import { Apple } from './components/Apple';
import tasks from './data/tasksList';

const root = (
  <HashRouter>
    <Apple tasks={tasks}/>
  </HashRouter>
	);

ReactDOM.render(root,
document.querySelector("#app"));



