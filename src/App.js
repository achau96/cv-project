import React, { useEffect, useState } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/Header';
import './styles/styles.css';

const App = () => {
  // const [educationId, setEducationId] = useState(0);
  // const [experienceId, setExperienceId] = useState(0);
  // const [educationList, setEducationList] = useState([
  //   {
  //     id: 0,
  //     school: '',
  //     program: '',
  //     degree: '',
  //     city: '',
  //     startDate: '',
  //     endDate: '',
  //   },
  // ]);
  // const [experienceList, setExperienceList] = useState([
  //   {
  //     id: 0,
  //     company: '',
  //     position: '',
  //     mainTask: '',
  //     startDate: '',
  //     endDate: '',
  //   },
  // ]);
  const [general, setGeneral] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
    description: '',
  });

  const handleGeneral = (e) => {
    setGeneral((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // //copying array of objects and setting whole array to state
  // handleEducation = (e, i) => {
  //   let educationCopy = this.state.educationList;
  //   educationCopy[i][e.target.name] = e.target.value;
  //   this.setState({ educationList: educationCopy });
  // };

  // handleExperience = (e, i) => {
  //   let experienceCopy = this.state.experienceList;
  //   experienceCopy[i][e.target.name] = e.target.value;
  //   this.setState({ experienceList: experienceCopy });
  // };

  // addEducation = () => {
  //   this.setState((prevState) => {
  //     return {
  //       counterID: prevState.counterID + 1,
  //       educationList: this.state.educationList.concat({
  //         id: this.state.counterID + 1,
  //         school: '',
  //         program: '',
  //         degree: '',
  //         city: '',
  //         startDate: '',
  //         endDate: '',
  //       }),
  //     };
  //   });
  // };

  // removeEducation = (e, id) => {
  //   let educationCopy = this.state.educationList;
  //   this.setState({
  //     educationList: educationCopy.filter((education) => education.id !== id),
  //   });
  // };

  // addExperience = () => {
  //   this.setState((prevState) => {
  //     return {
  //       experienceCounter: prevState.experienceCounter + 1,
  //       experienceList: this.state.experienceList.concat({
  //         id: this.state.experienceCounter + 1,
  //         company: '',
  //         position: '',
  //         mainTask: '',
  //         startDate: '',
  //         endDate: '',
  //       }),
  //     };
  //   });
  // };

  // removeExperience = (e, id) => {
  //   let experienceCopy = this.state.experienceList;
  //   this.setState({
  //     experienceList: experienceCopy.filter(
  //       (experience) => experience.id !== id
  //     ),
  //   });
  // };

  // submitForm = (e) => {
  //   console.log('This is supposed to push data onto a backend');
  //   console.log(this.state);
  // };

  return (
    <div className="App">
      <Header />
      <General
        name={general.name}
        email={general.email}
        number={general.number}
        address={general.address}
        description={general.description}
        handleGeneral={handleGeneral}
      />
      {console.log(general)}
      {/* {educationList.map((education, i) => {
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
        <div className="add" onClick={this.addEducation}>
          Add Education
        </div>

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
        <div className="add" onClick={this.addExperience}>
          Add Experience
        </div>
        <div className="submit" onClick={this.submitForm}>
          Submit Form
        </div> */}
    </div>
  );
};

export default App;
