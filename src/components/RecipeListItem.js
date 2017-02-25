import React from 'react';

class RecipeListItem extends React.Component {
	
	handleRecipeClick(event) {
		event.preventDefault();
		this.props.setCurrentRecipe(this.props.recipeID);
		this.props.closeEditor();
		this.props.closeSidebar();
	}

	render() {
		return(
			<li>
				<div onClick={e => this.handleRecipeClick(e)} className="recipe-list-item">
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