import React from 'react';

class RecipeViewer extends React.Component {
	handleDeleteButton(e) {
		e.preventDefault();
		this.props.deleteRecipe(this.props.recipeID);
		this.props.openSidebar();
	}

	render() {
		return(
			<div className="recipe-viewer">
				<h2>{this.props.recipe.name ? this.props.recipe.name : ''}</h2>
				<h3>Ingredients</h3>
				<ul>
					{this.props.recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
				</ul>
				<button onClick={this.props.openEditor}>Edit Recipe</button>
				<button onClick={e => this.handleDeleteButton(e)}>Delete Recipe</button>
			</div>
		)
	}
}

export default RecipeViewer;