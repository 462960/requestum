import React from 'react';
import {Link} from 'react-router-dom';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';


export const Item = createReactClass({
	render(){
		const i = this.props.tasks.findIndex( x => x.id == this.props.location.pathname.substr(1));
		const task = this.props.tasks[i];
	return (
		<form action="post" id={task.id}>
			<h6>{task.name} editor</h6>
			<Link className="home" to="/">Back Home</Link>
			<textarea name="text" id="" cols="30" rows="5" defaultValue={task.description}></textarea>
			<button type="submit" form={task.id}>Submit</button>
		</form>
	    )
	}
});

    Item.propTypes = {
      	tasks: PropTypes.array.isRequired
      }