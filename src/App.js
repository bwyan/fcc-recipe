import React, {Component} from 'react';
import Header from './components/Header.js';
import RecipeList from './components/RecipeList.js';
import RecipeViewer from './components/RecipeViewer.js'
import Editor from './components/Editor.js';

import SampleRecipes from './components/SampleRecipes.js'

//styles
import './App.scss';

class App extends Component {
  constructor() {
  	super();

  	this.openEditor = this.openEditor.bind(this);
  	this.closeEditor = this.closeEditor.bind(this);
  	this.addRecipe = this.addRecipe.bind(this);
  	this.deleteRecipe = this.deleteRecipe.bind(this);
  	this.setCurrentRecipe = this.setCurrentRecipe.bind(this);
  	this.handleNewRecipeButton = this.handleNewRecipeButton.bind(this);

  	this.state = {
  		recipes: {},
  		currentRecipe: null,
  		editorIsVisible: false
  	}
  }

  //Lifecycle
  componentWillMount() {
  	const recipeBox = JSON.parse(localStorage.getItem('recipeBox'));

  	if(recipeBox) {
	  	this.setState({
				currentRecipe: recipeBox.currentRecipe,
				editorIsVisible: recipeBox.editorIsVisible,
				recipes: recipeBox.recipes
	  	});  		
  	} else {
  		this.setState({
  			recipes: SampleRecipes
  		})
  	}


  }

  componentWillUpdate(nextProps, nextState) {
  	localStorage.setItem('recipeBox', JSON.stringify(nextState));
  }


  //UI Helpers
  openEditor() {
  	this.setState({editorIsVisible: true});
  }

  closeEditor() {
  	this.setState({editorIsVisible: false});
  }

  //State Management
  addRecipe(recipe) {
  	const recipes = {...this.state.recipes};

  	if (!this.state.currentRecipe) {
	  	const timestamp = Date.now();
			recipes[`recipe-${timestamp}`] = recipe;  		
  	} else {
  		recipes[this.state.currentRecipe] = recipe;
  	}

		this.setState({ recipes });
  }

  setCurrentRecipe(key) {
  	this.setState({currentRecipe: key});
  }

  deleteRecipe(recipe) {
  	const recipes = {...this.state.recipes};

  	delete recipes[recipe];

  	this.setState({recipes, currentRecipe: null});
  }

  //Event Handers
  handleNewRecipeButton() {
  	this.setState({currentRecipe: null});
  	this.openEditor();
  }

  render() {
    return (
       <div className="App">
        <Header />
        <main>
        	<div className="sidebar">
	        	<RecipeList recipes={this.state.recipes} setCurrentRecipe={this.setCurrentRecipe}/>
	        	<button onClick={this.handleNewRecipeButton}>New Recipe</button>
	        </div>
	        <div className="content">
	        	{
	        		this.state.editorIsVisible
	        		? <Editor
	    							addRecipe={this.addRecipe}
	    							closeEditor={this.closeEditor}
	    							recipe={this.state.recipes[this.state.currentRecipe]}
	    							recipeID={this.state.currentRecipe}
	  							/>
	  					: null
	        	}
	        	{
	        		this.state.currentRecipe != null && !this.state.editorIsVisible
	        		? <RecipeViewer
    							recipe={this.state.recipes[this.state.currentRecipe] || {name: '', ingredients: []}}
    							openEditor={this.openEditor}
    							deleteRecipe={this.deleteRecipe}
    							recipeID={this.state.currentRecipe}
  							/>
  						: null
						}
	        </div>
        </main>
      </div>
    )
  }
}

export default App;

        	