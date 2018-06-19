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