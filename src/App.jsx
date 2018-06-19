import React, { Component } from 'react';
import MovieList from './components/MovieList'
import './styles.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        }
    }
    componentDidMount = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
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
    render() {
        return (
            <React.Fragment>
                <h1 className="text-center">Studio Ghibli Movies</h1>
                <button className="d-flex mx-auto btn btn-ghost center-block">Show Movies</button>
                <MovieList movie={this.state.movies} />
            </React.Fragment>
        )
    }
}
export default App;