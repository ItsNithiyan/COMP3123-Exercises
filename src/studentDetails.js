import React from "react";

function Details({ mainHead, subHead, studentId, studentName, studentClg }) {
  return (
    <div>
      <h1>{mainHead}</h1>
      <h2>{subHead}</h2>
      <div>
        <p>Student ID : {studentId}</p>
        <p>Name : {studentName}</p>
        <p>{studentClg}</p>
      </div>
    </div>
  );
}
export default Details;
