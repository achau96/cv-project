import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <General />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
