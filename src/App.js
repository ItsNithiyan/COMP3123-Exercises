import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Details from "./studentDetails";
import Head from "./studentDetails";

function App() {
  const studentId = "101418712";
  const name = "Nithiyan Annapoorani Valluvan";
  const college = "George Brown College, Toronto";
  const mHead = "Welcome to Fullstack Developmet - I";
  const sHead = "React JS Programming Week09 Lab Exercise";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Details
          mainHead={mHead}
          subHead={sHead}
          studentId={studentId}
          studentName={name}
          studentClg={college}
        />
      </header>
    </div>
  );
}

export default App;
