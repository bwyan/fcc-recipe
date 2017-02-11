import React from 'react';

class Recipe extends React.Component {
	
	showDetails() {

	}

	render() {
		return(
			<li>
				<div>
					<span>{this.props.details.name}</span>
					<ol>
						{this.props.details.ingredients.map(i => <li key={i.id}>{i}</li>) }
					</ol>
				</div>
			</li>
		)
	}
}

export default Recipe;