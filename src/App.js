import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
	// Setting data that will be filled in the component
	state = {
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Menu', age: 29 },
			{ name: 'Stephanie', age: 26 },
		],

		showPersons: false,

		texts: [
			{ username: 'user1', title: 'Title 1', description: 'Desc 1' },
			{ username: 'user2', title: 'Title 2', description: 'Desc 2' }
		]
	}

	// Function that change the names that were already defined before
	switchNameHandler = (newName) => {
		
		// DON'DO DO THIS: this.state.persons[0].name = 'Maximilian';
		this.setState({
			persons: [
				{ name: newName, age: 28 },
				{ name: 'Menu', age: 29 },
				{ name: 'Stephanie', age: 26 },
			]
		});
	}

	// Updating name from input data
	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'Max', age: 28 },
				{ name: event.target.value, age: 29 },
				{ name: 'Stephanie', age: 26 },
			]
		});
	}

	// Show persons when action is taken
	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons; // Set doesShow variable, with the value of showPersons
		
		this.setState({
			showPersons: !doesShow // Change the state of showPersons to the inverse value
		});
	}

	// Change the username from input data
	changeUsernameHandler = (event) => {
		this.setState({
			texts: [
				{ username: event.target.value, title: 'Title 1', description: 'Desc 1' },
				{ username: 'user2', title: 'Title 2', description: 'Desc 2' }
			]
		});
	}

	returnUsernameToDefault = (event) => {
		this.setState({
			texts: [
				{ username: 'user1', title: 'Title 1', description: 'Desc 1' },
				{ username: 'user2', title: 'Title 2', description: 'Desc 2' }
			]
		});
	}

	// Renderer
	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		return (
			<div className="App">
				<h1>Test React</h1>
				<p>This is really working</p>

				{/* Defining button and behavior */}
				<button 
					style={ style }
					onClick={this.togglePersonsHandler}>Switch Name</button>

				{
					this.state.showPersons ?
						<section className="PersonsList">
							{/* Setting and importing components */}
							<Person
								name={this.state.persons[0].name}
								age={this.state.persons[0].age} />

							<Person
								name={this.state.persons[1].name}
								age={this.state.persons[1].age}
								click={this.switchNameHandler.bind(this, 'Max!')}
								changed={this.nameChangedHandler}>My Hobbies: racing</Person>

							<Person
								name={this.state.persons[2].name}
								age={this.state.persons[2].age} />
						</section>
					: null
				}

				
				<UserInput
					change={this.changeUsernameHandler}
					reset={this.returnUsernameToDefault} />

				<UserOutput
					username={this.state.texts[0].username}
					title={this.state.texts[0].title}
					description={this.state.texts[0].description} />

				<UserOutput
					username={this.state.texts[1].username}
					title={this.state.texts[1].title}
					description={this.state.texts[1].description} />
			</div>
		);
	}
}

export default App;
