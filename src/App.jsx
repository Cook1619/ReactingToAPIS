import React, { Component } from 'react';
import Card from './components/Card';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        }
    }
    componentDidMount = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
            });
    }
    render() {
        return (
            <React.Fragment>
            <Card />
            </React.Fragment>
        )
    }
}
export default App;