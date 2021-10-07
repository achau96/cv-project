import React from 'react';
import '../styles/General.css';

const General = (props) => {
  return (
    <div className="box">
      <div className="boxHeader">Personal Information</div>
      <input className="inputText" type="text" placeholder="Name"></input>
      <input className="inputText" type="email" placeholder="Email"></input>
      <input
        className="inputText"
        type="tel"
        placeholder="Phone Number"
      ></input>
    </div>
  );
};

export default General;
