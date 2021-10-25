import React, { useState } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/Header';
import './styles/styles.css';

const App = () => {
  const [educationId, setEducationId] = useState(0);
  const [experienceId, setExperienceId] = useState(0);
  const [educationList, setEducationList] = useState([
    {
      id: 0,
      school: '',
      program: '',
      degree: '',
      city: '',
      startDate: '',
      endDate: '',
    },
  ]);
  const [experienceList, setExperienceList] = useState([
    {
      id: 0,
      company: '',
      position: '',
      mainTask: '',
      startDate: '',
      endDate: '',
    },
  ]);
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
  const handleEducation = (e, i) => {
    let educationCopy = educationList;
    educationCopy[i][e.target.name] = e.target.value;
    setEducationList(educationCopy);
  };

  const handleExperience = (e, i) => {
    let experienceCopy = experienceList;
    experienceCopy[i][e.target.name] = e.target.value;
    setExperienceList(experienceCopy);
  };

  const addEducation = () => {
    setEducationList((prevState) => {
      setEducationId((prevID) => prevID + 1);
      return prevState.concat({
        id: educationId + 1,
        school: '',
        program: '',
        degree: '',
        city: '',
        startDate: '',
        endDate: '',
      });
    });
  };

  const removeEducation = (e, id) => {
    let educationCopy = educationList;
    setEducationList(educationCopy.filter((education) => education.id !== id));
  };

  const addExperience = () => {
    setExperienceList((prevState) => {
      setExperienceId((prevID) => prevID + 1);
      return prevState.concat({
        id: experienceId + 1,
        company: '',
        position: '',
        mainTask: '',
        startDate: '',
        endDate: '',
      });
    });
  };

  const removeExperience = (e, id) => {
    let experienceCopy = experienceList;
    setExperienceList(
      experienceCopy.filter((experience) => experience.id !== id)
    );
  };

  const submitForm = (e) => {
    console.log('This is supposed to push data onto a backend');
    console.log(general);
    console.log(educationList);
    console.log(experienceList);
  };

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
      {educationList.map((education, i) => {
        return (
          <Education
            id={education.id}
            key={education.id}
            school={education.school}
            program={education.program}
            degree={education.degree}
            city={education.city}
            handleEducation={(e) => handleEducation(e, i)}
            removeEducation={removeEducation}
          />
        );
      })}
      <div className="add" onClick={addEducation}>
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
            handleExperience={(e) => handleExperience(e, i)}
            removeExperience={removeExperience}
          />
        );
      })}
      <div className="add" onClick={addExperience}>
        Add Experience
      </div>
      <div className="submit" onClick={submitForm}>
        Submit Form
      </div>
    </div>
  );
};

export default App;
