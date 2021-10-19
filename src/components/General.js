import React from 'react';
import '../styles/General.css';

const General = (props) => {
  return (
    <div className="box">
      <div className="boxHeader">Personal Information</div>
      <input
        className="inputText"
        name="name"
        type="text"
        placeholder="Name"
        onChange={props.handleGeneral}
      ></input>
      <input
        className="inputText"
        name="email"
        type="email"
        placeholder="Email"
        onChange={props.handleGeneral}
      ></input>
      <input
        className="inputText"
        name="number"
        type="tel"
        placeholder="Phone Number"
        onChange={props.handleGeneral}
      ></input>
      <input
        className="inputText"
        name="address"
        type="text"
        placeholder="Address"
        onChange={props.handleGeneral}
      ></input>
      <textarea
        className="inputText description"
        name="description"
        placeholder="Description..."
        onChange={props.handleGeneral}
      ></textarea>
    </div>
  );
};

export default General;
