import React, {Component} from 'react';
import Header from './components/Header.js';
import RecipeList from './components/RecipeList.js';
import Recipe from './components/Recipe.js';

//styles
import './App.scss';

class App extends Component {
  constructor() {
  	super();

  	this.state = {
  		recipes: [],

  	}
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
        	<RecipeList />
        	<Recipe />
        </main>
      </div>
    )
  }
}

export default App;
