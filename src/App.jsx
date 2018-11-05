import React, { Component } from "react";
import List from "./components/List.jsx";
import "./styles.css";

const Base_URL = "https://ghibliapi.herokuapp.com/films";
const Base_URL2 = "https://ghibliapi.herokuapp.com/people";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      type: ""
    };
  }
  showMovies = async () => {
    try {
      let res = await fetch(`${Base_URL}`);
      let data = await res.json();

      this.setState({
        list: data,
        type: "movies"
      });
    } catch (e) {
      console.log(e);
    }
  };
  showPeople = async () => {
    try {
      let res = await fetch(`${Base_URL2}`);
      let data = await res.json();

      this.setState({
        list: data,
        type: "people"
      });
    } catch (e) {
      console.log(e);
    }
  };
  hasLoaded = () => {
    this.setState({ hasLoaded: this.state.hasLoaded });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center text-shadow">Studio Ghibli Movies</h1>
        <button
          className="btn btn-dark d-flex mx-auto shadow m-2"
          onClick={this.showMovies}
          onDoubleClick={this.hasLoaded}
        >
          Show Movies
        </button>
        <button
          className="btn btn-dark d-flex mx-auto shadow m-2"
          onClick={this.showPeople}
          onDoubleClick={this.hasLoaded}
        >
          Show People
        </button>
        <List type={this.state.type} list={this.state.list} />
      </React.Fragment>
    );
  }
}
export default App;
