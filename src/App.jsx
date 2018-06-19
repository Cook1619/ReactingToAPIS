import React, { Component } from 'react';
import MovieList from './components/MovieList'

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
                        <MovieList movie={this.state.movies}/>
            </React.Fragment>
        )
    }
}
export default App;