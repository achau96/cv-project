import React from 'react';

const Experience = (props) => {
  return (
    <div className="box">
      <div className="boxHeader">Work Experience</div>
      <form>
        <input
          className="inputText"
          name="company"
          type="text"
          placeholder="Company"
          onChange={props.handleExperience}
        ></input>
        <input
          className="inputText"
          name="position"
          type="text"
          placeholder="Position"
          onChange={props.handleExperience}
        ></input>
        <textarea
          className="inputText description"
          name="mainTask"
          placeholder="Main Tasks..."
          onChange={props.handleExperience}
        ></textarea>
        <div className="dateInput">
          From: <input type="date"></input>
        </div>
        <div className="dateInput">
          To:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="date"></input>
        </div>
      </form>
      {console.log(props)}
    </div>
  );
};

export default Experience;
