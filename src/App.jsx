import React, { Component } from 'react';
import List from './components/List';
import './styles.css';

const Base_URL = 'https://ghibliapi.herokuapp.com/films';
const Base_URL2 = 'https://ghibliapi.herokuapp.com/people'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list : [],
            type: ''
            
        }
    }
    showMovies = () => {
        fetch(`${Base_URL}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        type:'movies'
                    })
                },
                (error) => {
                    this.setState({
                        error
                    })
                }
            )
    }
    showPeople = () => {
        fetch(`${Base_URL2}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        type:'people'
                    })
                },
                (error) => {
                    this.setState({
                        error
                    })
                }
            )
    }

   
    render() {
    
            return (
                <React.Fragment>
                    <h1 className="text-center">Studio Ghibli Movies</h1>
                    <button className="d-flex mx-auto btn btn-ghost center-block m-4" 
                    onClick={this.showMovies}>Show Movies</button>
                    <button className="d-flex mx-auto btn btn-ghost center-block" 
                    onClick={this.showPeople}>Show People</button>
                    <List type={this.state.type} list={this.state.list}/>
                </React.Fragment>
            )
        }
    }
export default App;