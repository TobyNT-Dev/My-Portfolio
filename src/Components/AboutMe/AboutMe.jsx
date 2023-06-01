import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const AboutMe = () => {
    const [greeting, setGreeting] = useState("")

    useEffect(() => {
      let day = new Date();
      let hr = day.getHours();
      if (hr >= 0 && hr < 12) {
        setGreeting("godmorgen!");
      } else if (hr === 12) {
        setGreeting("god middag!");
      } else if (hr >= 12 && hr <= 17) {
        setGreeting("god eftermiddag!");
      } else {
        setGreeting("godaften!");
      }
    },[])
  return (
    <StyledSection>
      <h1><span>Velkommen</span>, og {greeting}</h1>
      <p className="abt-me">Jeg hedder <span>Tobias Thy</span>, og jeg er Junior <span className="span-1">Frontend Developer</span>, med en stor passion for web-design, kode- og databasetruktur og brugergrænseflade optimisering.</p>
      <h2>Mine erfaringer</h2>
      <div className="items">
          <p>HTML</p>
          <p>JSX</p>
          <p>React</p>
          <p>Lyddesign</p>
          <p>NPM</p>
          <p>SCSS</p>
          <p>SVG Design</p>
          <p>Javascript</p>
          <p>Play Canvas</p>
          <p>OOP</p>
          <p>Musik Produktion</p>
          <p>Git & Github</p>
          <p>SVG Animation</p>
          <p>Rest API</p>
          <p>Agile Arbejdsmetoder</p>
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
    width: 80%;
    text-align: center;
    margin: 5vw auto;
    color: ${props => props.theme.colors.onBackground};
    font-family: 'Cabin', sans-serif;
    font-size: 6vw;
    span {
    font-size: 6.5vw;
      color: ${(props) => props.theme.colors.primary};
    }
    .span-2 {
      font-size: 7.5vw;
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
    font-size: 2.5vw;
    text-align: center;
    span {
      font-size: 3vw;
      color: ${(props) => props.theme.colors.primary};
    }
  }
  .abt-me {
    width: 60%;
    text-align: center;
    margin: 2.5vw auto;
    color: ${props => props.theme.colors.onBackground};
    font-family: 'Cabin', sans-serif;
    font-size: 1.8vw;
    span {
      font-size: 2.3vw;
      color: ${(props) => props.theme.colors.primary};
      font-weight: 900;
    }
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