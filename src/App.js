import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterID: 0,
      experienceCounter: 0,
      educationList: [{ id: 0, school: '', program: '', degree: '', city: '' }],
      experienceList: [
        {
          id: 0,
          company: '',
          position: '',
          mainTask: '',
        },
      ],
      general: {
        name: '',
        email: '',
        number: '',
        address: '',
        description: '',
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

  addEducation = () => {
    this.setState((prevState) => {
      return {
        counterID: prevState.counterID + 1,
        educationList: this.state.educationList.concat({
          id: this.state.counterID + 1,
          school: '',
          program: '',
          degree: '',
          city: '',
        }),
      };
    });
  };

  removeEducation = (e, id) => {
    let educationCopy = this.state.educationList;
    this.setState({
      educationList: educationCopy.filter((education) => education.id !== id),
    });
  };

  addExperience = () => {
    console.log('hello');
    this.setState((prevState) => {
      return {
        experienceCounter: prevState.experienceCounter + 1,
        experienceList: this.state.experienceList.concat({
          id: this.state.experienceCounter + 1,
          company: '',
          position: '',
          mainTask: '',
        }),
      };
    });
  };

  render() {
    const { name, email, number, address, description } = this.state.general;
    // const { school, program, degree, city } = this.state.education;
    // const { company, position, mainTask } = this.state.experience;
    const { educationList, experienceList } = this.state;
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
              id={education.id}
              key={education.id}
              school={education.school}
              program={education.program}
              degree={education.degree}
              city={education.city}
              handleEducation={(e) => this.handleEducation(e, i)}
              removeEducation={this.removeEducation}
            />
          );
        })}
        <div onClick={this.addEducation}>Add Education</div>

        {experienceList.map((experience) => {
          return (
            <Experience
              id={experience.id}
              key={experience.id}
              company={experience.company}
              position={experience.position}
              mainTask={experience.mainTask}
              handleExperience={this.handleExperience}
            />
          );
        })}

        <div onClick={this.addExperience}>Add Experience</div>
      </div>
    );
  }
}

export default App;
