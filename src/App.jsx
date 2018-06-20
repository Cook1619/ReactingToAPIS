import React, { Component } from 'react';
import MovieList from './components/MovieList';
import PeopleList from './components/PeopleList';
import './styles.css';

const Base_URL = 'https://ghibliapi.herokuapp.com/films';
const Base_URL2 = 'https://ghibliapi.herokuapp.com/people'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            toggle: false
        }
    }
    showMovies = () => {
        fetch(`${Base_URL}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        toggle: true,
                        movies: result
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
                        toggle: true,
                        people: result
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
        if (!this.state.toggle) {
            return (
                <React.Fragment>
                    <h1 className="text-center">Studio Ghibli Movies</h1>
                    <button className="d-flex mx-auto btn btn-ghost center-block" onClick={this.showMovies}>Hide Movies</button>
                    
                    <MovieList movie={this.state.movies} />
                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                    <h1 className="text-center">Studio Ghibli Movies</h1>
                    <button className="d-flex mx-auto btn btn-ghost center-block" onClick={this.showMovies}>Show Movies</button>
                    <button className="d-flex mx-auto btn btn-ghost center-block" onClick={this.showPeople}>Show Movies</button>
                </React.Fragment>
            )
        }
    }
}
export default App;