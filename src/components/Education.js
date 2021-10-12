import React from 'react';

const Education = (props) => {
  return (
    <div className="box">
      <div className="boxHeader">Education</div>
      <form>
        <input className="inputText" type="text" placeholder="School"></input>
        <input className="inputText" type="text" placeholder="Program"></input>
        <input className="inputText" type="text" placeholder="Degree"></input>
        <input className="inputText" type="text" placeholder="City"></input>
        <div className="dateInput">
          From: <input type="date"></input>
        </div>
        <div className="dateInput">
          To:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="date"></input>
        </div>
      </form>
    </div>
  );
};

export default Education;
