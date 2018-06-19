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
                        movies: result.titles
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
                <div className="container">
                    <div className="row">
                        <Card />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default App;