import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      number: '',
    };
  }

  handleGeneral = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, email, number } = this.state;
    return (
      <div className="App">
        <Header />
        <General
          name={name}
          email={email}
          number={number}
          handleGeneral={this.handleGeneral}
        />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
