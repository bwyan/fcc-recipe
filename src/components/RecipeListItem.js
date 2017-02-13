import React from 'react';

class RecipeListItem extends React.Component {
	
	showDetails() {

	}

	render() {
		return(
			<li>
				<div onClick={e => this.props.setCurrentRecipe(this.props.recipeID)}>
					<h3>{this.props.details.name}</h3>
					<p>
						{`${this.props.details.ingredients.length} Ingredients`}
					</p>
				</div>
			</li>
		)
	}
}

export default RecipeListItem;