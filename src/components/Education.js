import React from 'react';

const Education = (props) => {
  return (
    <div className="box">
      <div className="boxHeader">Education</div>
      <form>
        <input
          className="inputText"
          name="school"
          type="text"
          placeholder="School"
          onChange={props.handleEducation}
        ></input>
        <input
          className="inputText"
          name="program"
          type="text"
          placeholder="Program"
          onChange={props.handleEducation}
        ></input>
        <input
          className="inputText"
          name="degree"
          type="text"
          placeholder="Degree"
          onChange={props.handleEducation}
        ></input>
        <input
          className="inputText"
          name="city"
          type="text"
          placeholder="City"
          onChange={props.handleEducation}
        ></input>
        <div className="dateInput">
          From: <input type="date"></input>
        </div>
        <div className="dateInput">
          To:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="date"></input>
        </div>
        <div onClick={(e) => props.removeEducation(e, props.id)}>Remove</div>
      </form>
    </div>
  );
};

export default Education;
