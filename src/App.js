import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationList: [{ school: '', program: '', degree: '', city: '' }],
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

  // handleEducation = (e) => {
  //   this.setState({
  //     education: { [e.target.name]: e.target.value },
  //   });
  // };

  //copying array of objects and setting whole array to state
  handleEducation = (e, i) => {
    let educationCopy = this.state.educationList;
    educationCopy[i][e.target.name] = e.target.value;
    this.setState({ educationList: educationCopy });
  };

  handleExperience = (e) => {
    this.setState({
      experience: { [e.target.name]: e.target.value },
    });
  };

  addInfo = () => {
    this.setState({
      educationList: this.state.educationList.concat({
        school: '',
        program: '',
        degree: '',
        city: '',
      }),
    });
  };

  render() {
    const { name, email, number, address, description } = this.state.general;
    // const { school, program, degree, city } = this.state.education;
    const { company, position, mainTask } = this.state.experience;
    const { educationList } = this.state;
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
        {educationList.map((education, i) => {
          return (
            <Education
              id={i}
              school={education.school}
              program={education.program}
              degree={education.degree}
              city={education.city}
              handleEducation={(e) => this.handleEducation(e, i)}
            />
          );
        })}
        {/* <Education
          school={school}
          program={program}
          degree={degree}
          city={city}
          handleEducation={this.handleEducation}
        /> */}
        <Experience
          company={company}
          position={position}
          mainTask={mainTask}
          handleExperience={this.handleExperience}
        />
        <button onClick={this.addInfo}>Add</button>
      </div>
    );
  }
}

export default App;
