import React from 'react';
import '../styles/General.css';

const General = (props) => {
  return (
    <div className="box">
      <div className="boxHeader">Personal Information</div>
      <input
        className="inputText"
        type="text"
        placeholder="Name"
        onChange={props.handleGeneral}
      ></input>
      <input className="inputText" type="email" placeholder="Email"></input>
      <input
        className="inputText"
        type="tel"
        placeholder="Phone Number"
      ></input>
      <input className="inputText" type="text" placeholder="Address"></input>
      <textarea
        className="inputText description"
        placeholder="Description..."
      ></textarea>
      {console.log(props.name)}
    </div>
  );
};

export default General;
