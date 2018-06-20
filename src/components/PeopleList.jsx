import React, { Component } from 'react';
import MovieList from './MovieList';

const Base_URL = 'https://ghibliapi.herokuapp.com/people';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            toggle: false
        }
    }
    componentDidMount = () => {
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
        this.setState({ toggle: !this.state.toggle })
    }
    render() {

            return (
                <React.Fragment>
                    <button className="d-flex mx-auto btn btn-ghost center-block m-2" onClick={this.showPeople}>Show People</button>
                    <MovieList movie={this.state.movies} />
                </React.Fragment>
            )
        }
    }
export default App;