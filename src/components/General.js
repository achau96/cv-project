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
      <input className="inputText" type="text" placeholder="Address"></input>
      <textarea
        className="inputText description"
        placeholder="Description..."
      ></textarea>
      {console.log(props)}
    </div>
  );
};

export default General;
