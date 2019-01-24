import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
//import { robots } from './robots'; //uses internal json
import '../containers/App.css';

class App extends Component {
    
    constructor()     {
        super()
        this.state = {
            //robots: robots, uses internal json
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> {
            return response.json();
        })
        .then(users => {
            this.setState({ robots: users})
        });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value)
    
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        //check if there are no users show loading message
        if(robots.length === 0){
            return <h1>Loading, please wait!</h1>
        } else {
        return (
                <div className="tc">
                <h1 className="f1">RoboFamily</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                <CardList robots={filteredRobots}/>
                </Scroll>
                </div>
            );
        }
        }
    }

export default App;