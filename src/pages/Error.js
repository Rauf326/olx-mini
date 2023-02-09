import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <Wrapper>
        <div className="flex-container">
          <div className="text-center">
            <h1>
              <span className="fade-in" id="digit1">4</span>
              <span className="fade-in" id="digit2">0</span>
              <span className="fade-in" id="digit3">4</span>
            </h1>

            <h3 className="fadeIn">
              UH UH! You're lost
              <br />
              PAGE NOT FOUND</h3>
            <NavLink to="/">
              <button type="button" name="button">Return To Home</button>

            </NavLink>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: black;
  animation: colorSlide 15s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;

  .text-center {
    text-align: center;
    h1,
    h3 {
      margin: 10px;
      cursor: default;
      
      .fade-in {
        animation: fadeIn 2s ease infinite;
      }
    }

    h1 {
      font-size: 8em;
      transition: font-size 200ms ease-in-out;
      border-bottom: 1px dashed white;

      span#digit1 { animation-delay: 200ms; }
      span#digit2 { animation-delay: 300ms; }
      span#digit3 { animation-delay: 400ms; }
    }
    
    button {
      border: 1px solid black;
      background: transparent;
      outline: none;
      
      padding: 10px 20px;
      font-size: 1.1rem;
      font-weight: bold;
      color: black;
      text-transform: uppercase;
      transition: background-color 200ms ease-in;
      margin: 20px 0;
      
      &:hover {
        
        color: white;
        cursor: pointer;
        background-color:black;
      }
    }
  }
}

@keyframes colorSlide {
  0% { background-color: #grey; }
  100% { background-color: white; }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  };
  100% {
    opacity: 1;
  }
}
`
export default Error;