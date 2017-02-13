import React, {Component} from 'react';
import Header from './components/Header.js';
import RecipeList from './components/RecipeList.js';
import RecipeViewer from './components/RecipeViewer.js'
import Editor from './components/Editor.js';

//styles
import './App.scss';

class App extends Component {
  constructor() {
  	super();

  	this.addRecipe = this.addRecipe.bind(this);
  	this.setCurrentRecipe = this.setCurrentRecipe.bind(this);

  	this.state = {
  		recipes: {},
  		currentRecipe: null
  	}
  }

  addRecipe(recipe) {
  	const recipes = {...this.state.recipes};

  	const timestamp = Date.now();
		recipes[`recipe-${timestamp}`] = recipe;

		this.setState({ recipes });
  }

  setCurrentRecipe(key) {
  	this.setState({currentRecipe: key});
  }

  render() {
    return (
       <div className="App">
        <Header />
        <main>
        	<RecipeList recipes={this.state.recipes} setCurrentRecipe={this.setCurrentRecipe}/>
        	<Editor addRecipe={this.addRecipe} />
			 		<RecipeViewer recipe={this.state.recipes[this.state.currentRecipe] || {name: '', ingredients: []}}/>
        </main>
      </div>
    )
  }
}

export default App;

        	