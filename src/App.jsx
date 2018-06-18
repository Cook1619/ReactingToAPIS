import React, { Component } from 'react';

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
            
            </React.Fragment>
        )
    }
}
export default App;