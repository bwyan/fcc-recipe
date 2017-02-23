import React from 'react';

class Editor extends React.Component {
	handleSubmitButton(event) {
		event.preventDefault();

		const recipe = {
			name: this.name.value.trim(),
			ingredients: this.ingredients.value
				.split(",")
				.map(ingredient => ingredient.trim())
				.filter(ingredient => ingredient !== '')
		}

		this.props.addRecipe(recipe);	
		this.props.closeEditor();
		this.recipeForm.reset();
	}

	handleCancelButton(event) {
		event.preventDefault();

		this.props.closeEditor();
		if(this.props.recipeID === null) {this.props.openSidebar()};		
	}

	render() {
		return(
			<div key={this.props.recipeID}>
				<form ref={input => this.recipeForm = input} onSubmit={(e) => this.handleSubmitButton(e)}>
					<label htmlFor="recipe-name">
						Recipe Name
						<input
							type="text"
							name="recipe-name"
							ref={input => this.name = input}
							defaultValue={this.props.recipe.name}
						/>
					</label>
					<label htmlFor="ingredients">
						Ingredients
						<textarea
							name="ingredients"
							ref={input => this.ingredients = input}
							defaultValue={this.props.recipe.ingredients}
						/>
					</label>
					<button type="submit">Save</button>
					<button onClick={(e) => this.handleCancelButton(e)}>Cancel</button>
				</form>
			</div>
		)	
	}
}

Editor.defaultProps = {
	recipe: {name: '', ingredients: []}
}

export default Editor;