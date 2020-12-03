import React from "react";
import styled from "styled-components";

const InputFieldStyle = styled.form`
  input {
    padding: 15px;
    font-size: 20px;
  }

  button {
    padding: 25px;
    background-color: #f4511e;
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    font-size: 20px;
    margin: 4px 2px;
    opacity: 0.6;
    transition: 0.3s;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    margin-top: 22vh;
  }
`;

const InputFields = () => {
  return (
    <InputFieldStyle>
      <input></input>
      <input></input>
      <button>Generate Charts</button>
    </InputFieldStyle>
  );
};

export default InputFields;

// const InputFieldStyle = styled.form`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// `;
