import React from 'react';
import RecipeListItem from './RecipeListItem.js'

class RecipeList extends React.Component {
	render() {
		return(
			<div className="recipe-list" role="list" aria-label="recipes">
				<ul>
					{
						Object
							.keys(this.props.recipes)
							.map(key => <RecipeListItem key={key} recipeID={key} details={this.props.recipes[key]} setCurrentRecipe={this.props.setCurrentRecipe}/>)
					}
				</ul>
			</div>
		)
	}
}

export default RecipeList; 