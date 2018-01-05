import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
	state = {
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Menu', age: 29 },
			{ name: 'Stephanie', age: 26 },
		]
	}

	switchNameHandler = () => {
		// console.log('Was clicked');

		// DON'DO DO THIS: this.state.persons[0].name = 'Maximilian';
		this.setState({
			persons: [
				{ name: 'Maximilian', age: 28 },
				{ name: 'Menu', age: 29 },
				{ name: 'Stephanie', age: 26 },
			]
		});
	}


	render() {
		return (
			// open .app
			<div className="App">
				<h1>Test React</h1>
				<p>This is really working</p>
				<button onClick={this.switchNameHandler}>Switch Name</button>
			
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: racing</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
			</div>
			// close .app
		);

		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
	}
}

export default App;
