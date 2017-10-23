import React from 'react';
import createReactClass from 'create-react-class';

export const GoodsTable = createReactClass({
	getInitialState(){
		return {
			units: 4
		}
	},
	showMore(){
		this.setState({
			units: this.state.units + 4
		})
		console.log(this.props.data.length, this.state.units);
	},
	render(){
		const {data} = this.props;
		const goodsUnit = data.slice(0, this.state.units).map((unit, i) =>
			<div key={i} className="unit">
				<div className="unit-img">
				<img src={unit.img} alt={unit.clothes}/>
				<div className="unit-status">
					<div className={unit.discountCost == null ? 'none' : ''}>sale</div>
					<div className={unit.new ? '' : 'none'}>new</div>
				</div>
				</div>
				<h6 className="unit-name">{unit.title}</h6>
				<p className="unit-description">{unit.description}</p>
				<div className="unit-price">
					<span >${unit.cost}.00</span>
					<span className={unit.discountCost == null ? 'none' : ''}>${unit.discountCost}.00</span>
				</div>
				<div className="unit-buttons">
					<a href="">add <span>to cart</span></a>
					<a href="">view</a>
				</div>
				
			</div>
			)
		return (
			<div className="units-wrapper">
			{goodsUnit}
			<button className={data.length == this.state.units - 4 ? 'none' : ''} onClick={this.showMore}>Load more</button>
			</div>
			)
	}
})