import React from 'react';
import Recipe from './Recipe.js'

class RecipeList extends React.Component {
	render() {
		return(
			<div className="recipes">
				<h2>Recipe List</h2>
				<ul>
					{
						Object
							.keys(this.props.recipes)
							.map(key => <Recipe key={key} details={this.props.recipes[key]} />)
					}
				</ul>
			</div>
		)
	}
}

export default RecipeList; 