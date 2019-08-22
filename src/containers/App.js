import React, { Component } from 'react'
import Cardlist from '../components/cardlist'
import {Robots} from '../Robots'
import Searchbox from '../components/Searchbox'
import './App.css'
import Scroll from '../components/scroll'
/*const App = () => {
	return (
		<div className='tc'>
			<h1>Robo friends</h1>
			<Searchbox/>
			<Cardlist Robots={Robots}/>
		</div>
		);
}*/

class App extends Component {
	constructor(){
		super()
		this.state = {
			Robots:Robots,
			Searchfield:''
		}
	}

	onsearchChange = (event) => {
		this.setState({ Searchfield:event.target.value })
	}


	render() {
		const filteredrobots = this.state.Robots.filter(Robot => {
			return Robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
		})
		return (
			<div className='tc'>
				<h1 className='f2'>Robo friends</h1>
				<Searchbox searchChange={this.onsearchChange}/>
				<Scroll>
					<Cardlist Robots={filteredrobots}/>
				</Scroll>
			</div>
		)
	}
	
}

export default App