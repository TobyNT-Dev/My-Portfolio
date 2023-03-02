import React from 'react'
import styled from 'styled-components'

export const AboutMe = () => {
  return (
    <StyledSection>
      <h1><span>Welcome</span>, take a look around!</h1>
      <p className="abt-me">I'm Tobias Thy, and I am a Junior <span className="span-1">Web Developer</span>, with a great passion for <span className="span-2">design,</span> user-experience & user-Interface.</p>
      <h2>Skillset Overview</h2>
      <div className="items">
          <p>HTML</p>
          <p>JSX</p>
          <p>React</p>
          <p>Audio Engineering</p>
          <p>NPM</p>
          <p>SCSS</p>
          <p>SVG Design</p>
          <p>Javascript</p>
          <p>Play Canvas</p>
          <p>OOP</p>
          <p>Music Production</p>
          <p>Git & Github</p>
          <p>SVG Animation</p>
          <p>Rest API</p>
          <p>Agile Work Methods</p>
          <p>Styled Components</p>
          <p>MySQL</p>
          <p>Figma</p>
          <p>Cubase DAW</p>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
// 600px & under
h1 {
  margin-top: 3vw;
  color: ${props => props.theme.colors.onBackground};
  font-family: 'Cabin', sans-serif;
  font-size: 6vw;
  text-align: center;
  span {
    font-size: 7vw;
      color: ${(props) => props.theme.colors.primary};
    }
  }
  .abt-me {
    width: 60%;
    text-align: center;
    margin: 5vw auto;
    color: ${props => props.theme.colors.onBackground};
    font-family: 'Cabin', sans-serif;
    font-size: 5vw;
    .span-2 {
      font-size: 5.5vw;
      font-family: 'Style Script', sans-serif;
    }
  }
  h2 {
  text-align: center;
  margin:0 0 0.8vw 0;
  color: ${props => props.theme.colors.onBackground};
  font-family: 'Cabin', sans-serif;
  font-size: 6vw;
  font-weight: 300;
}
.items {
  border-radius: 5px;
  border-top: ${(props) => props.theme.colors.secondary} 2px solid;
  border-left: ${(props) => props.theme.colors.secondary} 2px solid;
  background-color: ${(props) => props.theme.colors.cardBackground};
  box-shadow: black 5px 5px 12px;
  padding: 2vw;
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 4.5vw;
    display: inline-block;
    margin: 0.2vw;
    padding: 0.3vw;
    border: ${props => props.theme.colors.primary} solid 1px;
    box-shadow: 0 0 5px ${props => props.theme.colors.primary};
    border-radius: 3px;
    color: ${props => props.theme.colors.onBackground};
    font-weight: 900;
  }
}
@media only screen and (min-width: 600px) {
  h1 {
    margin-top: 3vw;
    color: ${props => props.theme.colors.onBackground};
    font-family: 'Cabin', sans-serif;
    font-size: 2.4vw;
    text-align: center;
    span {
      font-size: 2.7vw;
      color: ${(props) => props.theme.colors.primary};
    }
  }
  .abt-me {
    width: 60%;
    text-align: center;
    margin: 2.5vw auto;
    color: ${props => props.theme.colors.onBackground};
    font-family: 'Cabin', sans-serif;
    font-size: 1.4vw;
    .span-2 {
      font-size: 2vw;
      font-family: 'Style Script', sans-serif;
  }
}
h2 {
  text-align: center;
  margin:0 0 0.8vw 0;
  color: ${props => props.theme.colors.onBackground};
  font-family: 'Cabin', sans-serif;
  font-size: 1.7vw;
  font-weight: 300;
}
.items {
  border-radius: 5px;
  border-top: ${(props) => props.theme.colors.secondary} 2px solid;
  border-left: ${(props) => props.theme.colors.secondary} 2px solid;
  background-color: ${(props) => props.theme.colors.cardBackground};
  box-shadow: black 5px 5px 12px;
  padding: 2vw;
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 1.2vw;
    display: inline-block;
    margin: 0.2vw;
    padding: 0.3vw;
    border: ${props => props.theme.colors.primary} solid 1px;
    box-shadow: 0 0 5px ${props => props.theme.colors.primary};
    border-radius: 3px;
    color: ${props => props.theme.colors.onBackground};
    font-weight: 900;
  }
}
}
`