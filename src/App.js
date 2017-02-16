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

  	this.openEditor = this.openEditor.bind(this);
  	this.closeEditor = this.closeEditor.bind(this);
  	this.addRecipe = this.addRecipe.bind(this);
  	this.setCurrentRecipe = this.setCurrentRecipe.bind(this);
  	this.handleNewRecipeButton = this.handleNewRecipeButton.bind(this);

  	this.state = {
  		recipes: {},
  		currentRecipe: null,
  		editorIsVisible: false
  	}
  }


  openEditor() {
  	this.setState({editorIsVisible: true});
  }

  closeEditor() {
  	this.setState({editorIsVisible: false});
  }

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

  handleNewRecipeButton() {
  	this.setState({currentRecipe: null});
  	this.openEditor();
  }

  render() {
    let editor = null;
    let recipeViewer = null;

    if (this.state.editorIsVisible) {
    	editor = <Editor
    							addRecipe={this.addRecipe}
    							closeEditor={this.closeEditor}
    							recipe={this.state.recipes[this.state.currentRecipe]}
    							recipeID={this.state.currentRecipe}
  							/>;
    } else {
    	editor = null;
    }

    if (this.state.currentRecipe != null) {
    	recipeViewer = <RecipeViewer
    		recipe={this.state.recipes[this.state.currentRecipe] || {name: '', ingredients: []}}
    		openEditor={this.openEditor}
  		/>
    } else {
    	recipeViewer = null;
    }

    return (
       <div className="App">
        <Header />
        <main>
        	{editor}
        	<div className="sidebar">
	        	<RecipeList recipes={this.state.recipes} setCurrentRecipe={this.setCurrentRecipe}/>
	        	<button onClick={this.handleNewRecipeButton}>New Recipe</button>
	        </div>
	        <div className="content">
	        	{recipeViewer}
	        </div>
        </main>
      </div>
    )
  }
}

export default App;

        	