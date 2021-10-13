import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: '',
        email: '',
        number: '',
        address: '',
        description: '',
      },
      education: {},
    };
  }

  handleGeneral = (e) => {
    this.setState({
      general: { [e.target.name]: e.target.value },
    });
  };

  render() {
    const { name, email, number, address, description } = this.state.general;
    return (
      <div className="App">
        <Header />
        <General
          name={name}
          email={email}
          number={number}
          address={address}
          description={description}
          handleGeneral={this.handleGeneral}
        />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
