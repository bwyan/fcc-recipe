import React from 'react';

class RecipeList extends React.Component {
	render() {
		return(
			<div className="recipes">
				<ol>
					<li>Black Bean Soup</li>
					<li>Angel Food Cake</li>
					<li>Braised Lamb Shanks</li>
				</ol>
			</div>
		)
	}
}

export default RecipeList; 