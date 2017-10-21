import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import {TasksTable} from './TasksTable';
import {Item} from './Item';

export const Apple = (props) => {
	const {tasks} = props;
 return	<Switch>
    		<Route exact path='/' render={props => <TasksTable {...props} tasks={tasks}/>}/>
    		<Route path='/:id' render={props => <Item {...props} tasks={tasks}/>}/>
  		</Switch>
}