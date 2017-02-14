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
  	this.openEditor = this.openEditor.bind(this);
  	this.closeEditor = this.closeEditor.bind(this);

  	this.state = {
  		recipes: {},
  		currentRecipe: null,
  		editorIsVisible: false,
  		recipeToBeEdited: null
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

  	const timestamp = Date.now();
		recipes[`recipe-${timestamp}`] = recipe;

		this.setState({ recipes });
  }

  setCurrentRecipe(key) {
  	this.setState({currentRecipe: key});
  }

  render() {
    let editor = null;

    if (this.state.editorIsVisible) {
    	editor = <Editor
    							addRecipe={this.addRecipe}
    							closeEditor={this.closeEditor}
    							recipe={this.state.recipes[this.state.recipeToBeEdited]}
  							/>;
    } else {
    	editor = null;
    }

    return (
       <div className="App">
        <Header />
        <main>
        	{editor}
        	<div className="sidebar">
	        	<RecipeList recipes={this.state.recipes} setCurrentRecipe={this.setCurrentRecipe}/>
	        	<button onClick={this.openEditor}>New Recipe</button>
	        </div>
	        <div className="content">
	        	<RecipeViewer recipe={this.state.recipes[this.state.currentRecipe] || {name: '', ingredients: []}}/>
	        </div>
        </main>
      </div>
    )
  }
}

export default App;

        	