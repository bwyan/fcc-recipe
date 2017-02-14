import React from 'react';

class RecipeViewer extends React.Component {
	render() {
		return(
			<div>
				<h2>{this.props.recipe.name ? this.props.recipe.name : ''}</h2>
				<h3>Ingredients</h3>
				<ul>
					{this.props.recipe.ingredients.map(ingredient => <li key={ingredient.id}>{ingredient}</li>)}
				</ul>
				<button>Edit Recipe</button>
			</div>
		)
	}
}

export default RecipeViewer;