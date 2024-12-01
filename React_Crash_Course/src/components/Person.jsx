import React from "react";
import Mobile from "./Mobile";
import './Person.css'

const Person = ({ name, salary, age }) => {
  // Inline
  // Internal
  // External

  const showAlert = () =>{
    alert("This is a alert")
  }

  const my_style = {
    backgroundColor: "red",
    padding: "10px",
    margin: "10px",
    borderRadius: "15px",
    border: "2px solid yellow",
  };

  return (
    <div onClick={showAlert} className="person" > 
      <h1>Name : - {name}</h1>
      <h2>Age : - {age}</h2>

      {salary && <p>Salary : - {salary}</p>}
    </div>
  );
};

export default Person;
