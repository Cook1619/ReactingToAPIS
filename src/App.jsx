import React, { Component } from 'react';
import MovieList from './components/MovieList'
import './styles.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            toggle: false
        }
    }
    componentDidMount = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
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
    showMovies = () => {
        this.setState({ toggle: !this.state.toggle })
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
                </React.Fragment>
            )
        }
    }
}
export default App;