import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
require('./sass/styles');
import { App } from './components/App';
import {data} from './data/data';

ReactDOM.render(<App data={data}/>,
document.querySelector("#app"));



