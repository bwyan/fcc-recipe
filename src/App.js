import React, {Component} from 'react';
import Header from './components/Header.js';
import RecipeList from './components/RecipeList.js';

//styles
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
        	<RecipeList />
        </main>
      </div>
    )
  }
}

export default App;
