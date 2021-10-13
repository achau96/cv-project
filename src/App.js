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
      education: {
        school: '',
        program: '',
        degree: '',
        city: '',
      },
      experience: {
        company: '',
        position: '',
        mainTask: '',
      },
    };
  }

  handleGeneral = (e) => {
    this.setState({
      general: { [e.target.name]: e.target.value },
    });
  };

  handleEducation = (e) => {
    this.setState({
      education: { [e.target.name]: e.target.value },
    });
  };

  handleExperience = (e) => {
    this.setState({
      experience: { [e.target.name]: e.target.value },
    });
  };

  render() {
    const { name, email, number, address, description } = this.state.general;
    const { school, program, degree, city } = this.state.education;
    const { company, position, mainTask } = this.state.experience;
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
        <Education
          school={school}
          program={program}
          degree={degree}
          city={city}
          handleEducation={this.handleEducation}
        />
        <Experience
          company={company}
          position={position}
          mainTask={mainTask}
          handleExperience={this.handleExperience}
        />
      </div>
    );
  }
}

export default App;
