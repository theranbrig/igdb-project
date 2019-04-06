import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import Main from './pages/RandomGame';

class App extends Component {
	render() {
		const App = () => (
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route
						path="/random"
						component={props => <Main timestamp={new Date().toString()} {...props} />}
					/>
				</Switch>
			</div>
		);
		return (
			<Switch>
				<App />
			</Switch>
		);
	}
}

export default App;
