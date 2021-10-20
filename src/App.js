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
      educationList: [
        {
          id: 0,
          school: '',
          program: '',
          degree: '',
          city: '',
          startDate: '',
          endDate: '',
        },
      ],
      experienceList: [
        {
          id: 0,
          company: '',
          position: '',
          mainTask: '',
          startDate: '',
          endDate: '',
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

  handleExperience = (e, i) => {
    let experienceCopy = this.state.experienceList;
    experienceCopy[i][e.target.name] = e.target.value;
    this.setState({ experienceList: experienceCopy });
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
          startDate: '',
          endDate: '',
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
          startDate: '',
          endDate: '',
        }),
      };
    });
  };

  removeExperience = (e, id) => {
    let experienceCopy = this.state.experienceList;
    this.setState({
      experienceList: experienceCopy.filter(
        (experience) => experience.id !== id
      ),
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
        {console.log(educationList)}
        <div onClick={this.addEducation}>Add Education</div>

        {experienceList.map((experience, i) => {
          return (
            <Experience
              id={experience.id}
              key={experience.id}
              company={experience.company}
              position={experience.position}
              mainTask={experience.mainTask}
              handleExperience={(e) => this.handleExperience(e, i)}
              removeExperience={this.removeExperience}
            />
          );
        })}
        {console.log(experienceList)}
        <div onClick={this.addExperience}>Add Experience</div>
        <button>Submit Form</button>
      </div>
    );
  }
}

export default App;
