import React, {Component} from 'react';
import Header from './components/Header.js';
import RecipeList from './components/RecipeList.js';
import Editor from './components/Editor.js';

//styles
import './App.scss';

class App extends Component {
  constructor() {
  	super();

  	this.addRecipe = this.addRecipe.bind(this)

  	this.state = {
  		recipes: {}
  	}
  }

  addRecipe(recipe) {
  	const recipes = {...this.state.recipes};

  	const timestamp = Date.now();
		recipes[`recipe-${timestamp}`] = recipe;

		this.setState({ recipes });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
        	<RecipeList recipes={this.state.recipes}/>
        	<Editor addRecipe={this.addRecipe} />
        </main>
      </div>
    )
  }
}

export default App;
