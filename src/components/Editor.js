import React from 'react';

class Editor extends React.Component {
	createRecipe(event) {
		event.preventDefault();



		const recipe = {
			name: this.name.value.trim(),
			ingredients: this.ingredients.value
				.split(",")
				.map(ingredient => ingredient.trim())
				.filter(ingredient => ingredient !== '')
		}

		console.log(recipe);

		this.props.addRecipe(recipe);
		this.recipeForm.reset();
	}

	render() {
		return(
			<div>
				<h2>Editor</h2>
				<form ref={input => this.recipeForm = input} onSubmit={(e) => this.createRecipe(e)}>
					<label htmlFor="recipe-name">
						Recipe Name
						<input
							type="text"
							name="recipe-name"
							ref={input => this.name = input}
						/>
					</label>
					<label htmlFor="ingredients">
						Ingredients
						<textarea
							name="ingredients"
							default="coffee, water, love"
							ref={input => this.ingredients = input}
						/>
					</label>
					<button type="submit">Save</button>
				</form>
			</div>
		)	
	}
}

export default Editor;