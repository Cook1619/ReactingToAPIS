import React, { Component } from 'react';
import Card from './components/Card.jsx';

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
                        <Card info={this.state.movie}/>
            </React.Fragment>
        )
    }
}
export default App;