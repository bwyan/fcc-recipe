import React from 'react';

class Header extends React.Component {
	handleToggleSidebar(event) {
		event.preventDefault();

		this.props.toggleSidebar();
	}

	render() {
		return(
			<header>
        <button onClick={e => this.handleToggleSidebar(e)}>
        	{this.props.sidebarIsExpanded ? '< []' : '[] >'}
        </button>

        <h1>Cocktail Recipes</h1>
        <div className="menu"></div>
      </header>
		)
	}
}

export default Header