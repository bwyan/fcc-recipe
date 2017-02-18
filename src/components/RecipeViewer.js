import React from 'react';

class RecipeViewer extends React.Component {

	render() {
		return(
			<div>
				<h2>{this.props.recipe.name ? this.props.recipe.name : ''}</h2>
				<h3>Ingredients</h3>
				<ul>
					{this.props.recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
				</ul>
				<button onClick={this.props.openEditor}>Edit Recipe</button>
				<button onClick={() => this.props.deleteRecipe(this.props.recipeID)}>Delete Recipe</button>
			</div>
		)
	}
}

export default RecipeViewer;