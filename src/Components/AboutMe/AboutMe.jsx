import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const AboutMe = () => {

  return (
    <StyledSection>
      <h1><span>Welcome</span>, take a look around!</h1>
      <p>I'm Tobias Thy, and I am a Junior <span>Web Developer</span>, with a great passion for design, and user experience.</p>
      <h2>What do I have experience in?</h2>
      <div className="items">
          <p>HTML</p>
          <p>JSX</p>
          <p>Agile Work Methods</p>
          <p>React</p>
          <p>NPM</p>
          <p>SCSS</p>
          <p>Play Canvas</p>
          <p>Audio Engineering</p>
          <p>SVG Design</p>
          <p>Javascript</p>
          <p>OOP</p>
          <p>Music Production</p>
          <p>SVG Animation</p>
          <p>Rest API</p>
          <p>Git & Github</p>
          <p>Styled Components</p>
          <p>MySQL</p>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
h1 {
  margin-top: 3vw;
  color: white;
  font-family: 'Cabin', sans-serif;
  font-size: 2vw;
  text-align: center;
  span {
    font-size: 2.3vw;
    color: #F20046;
  }
}
p {
  text-align: center;
  margin: 2.5vw 0;
  color: white;
  font-family: 'Cabin', sans-serif;
  font-size: 1.1vw;
  span {
    color: #F20046;
    font-weight: 600;
  }
}
h2 {
  margin:0 0 2.5vw 0;
  color: white;
  font-family: 'Cabin', sans-serif;
  font-size: 1.5vw;
  font-weight: 300;
}
.items {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  p {
    display: inline-block;
    margin: 0.2vw;
    padding: 0.3vw;
    background-color: #fff;
    border-radius: 3px;
    color: black;
    font-weight: 600;
  }
}
`