import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const AboutMe = () => {
    const [greeting, setGreeting] = useState("")

    useEffect(() => {
      let day = new Date();
      let hr = day.getHours();
      if (hr >= 0 && hr < 10) {
        setGreeting("godmorgen!");
      } else if (hr < 12) {
        setGreeting("god formiddag!");
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
      <div className="text-wrapper">
      <p className="abt-me1">Jeg hedder <span>Tobias Thy</span>, og jeg er Junior <span>Frontend Developer</span>, med en stor passion for web-design, kode- og databasetruktur og brugergrænseflade optimisering.</p>
      <p className="abt-me2">Nu er jeg startet på <span>Data Tekniker</span>, for at få erfaring indenfor alt hvad der hedder backend, C#, og programmering, for at kunne få et solidt felt af viden og erfaring som <span>Full Stack</span> udvikler.</p>
      </div>
      <h2>Mine erfaringer</h2>
      <ul className="items">
          <li>HTML</li>
          <li>JSX</li>
          <li>React</li>
          <li>Lyddesign</li>
          <li>NPM</li>
          <li>SCSS</li>
          <li>SVG Design</li>
          <li>Javascript</li>
          <li>Play Canvas</li>
          <li>OOP</li>
          <li>Musik Produktion</li>
          <li>Git & Github</li>
          <li>SVG Animation</li>
          <li>Rest API</li>
          <li>Agile Arbejdsmetoder</li>
          <li>Styled Components</li>
          <li>MySQL</li>
          <li>Figma</li>
          <li>Cubase DAW</li>
      </ul>
    </StyledSection>
  )
}

const StyledSection = styled.section`
// 600px & under
@media only screen and (max-width: 600px) {
  h1 {
    margin-top: 30px;
    color: ${props => props.theme.colors.onBackground};
    font-family: 'Cabin', sans-serif;
    font-size: 2rem;
    text-align: center;
    span {
      font-size: 2rem;
        color: ${(props) => props.theme.colors.primary};
      }
    }
    .text-wrapper {

      .abt-me1 {
        width: 45%;
        text-align: center;
        margin: 20px auto;
        color: ${props => props.theme.colors.onBackground};
        font-family: 'Cabin', sans-serif;
        font-size: 2rem;
        span {
          color: ${(props) => props.theme.colors.primary};
        }
      }
      .abt-me2 {
        width: 45%;
        text-align: center;
        margin: 20px auto;
        color: ${props => props.theme.colors.onBackground};
        font-family: 'Cabin', sans-serif;
        font-size: 2rem;
      span {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
    h2 {
    text-align: center;
    margin:0 0 10px 0;
    color: ${props => props.theme.colors.onBackground};
    font-family: 'Cabin', sans-serif;
    font-size: 2rem;
    font-weight: 300;
  }
  .items {
    box-shadow: black 5px 5px 12px;
    padding: 2vw;
    width: 80vw;
    margin: 0 auto;
    column-count: 2;
    li {
      font-size: 1.7rem;
      color: ${props => props.theme.colors.onBackground};
      font-weight: 900;
      margin-left: initial;
    }
  }
}
//PC and tablet devices
@media only screen and (min-width: 600px) {
  h1 {
    margin-top: 3vw;
    color: ${props => props.theme.colors.onBackground};
    font-family: 'Cabin', sans-serif;
    font-size: 2rem;
    text-align: center;
    span {
      font-size: 2.2rem;
      color: ${(props) => props.theme.colors.primary};
    }
  }
  .text-wrapper {
    margin-top: 30px;
    width: 100%;
    display: flex;
    align-items: space-between;
    .abt-me1 {
      display: inline-block;
      width: 45%;
      text-align: center;
      margin: 20px auto;
      color: ${props => props.theme.colors.onBackground};
      font-family: 'Cabin', sans-serif;
      font-size: 1.6rem;
      span {
        color: ${(props) => props.theme.colors.primary};
      }
    }
    .abt-me2 {
      display: inline-block;
      width: 45%;
      text-align: center;
      margin: 20px auto;
      color: ${props => props.theme.colors.onBackground};
      font-family: 'Cabin', sans-serif;
      font-size: 1.6rem;
    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }
}
h2 {
  text-align: center;
  margin:0 0 15px 0;
  color: ${props => props.theme.colors.onBackground};
  font-family: 'Cabin', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
}
.items {
  border-radius: 5px;
  border-top: ${(props) => props.theme.colors.secondary} 2px solid;
  border-left: ${(props) => props.theme.colors.secondary} 2px solid;
  background-color: ${(props) => props.theme.colors.cardBackground};
  box-shadow: black 5px 5px 12px;
  padding: 15px 20px;
  width: 75%;
  margin: 0 auto;
  column-count: 3;
  li {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.onBackground};
    font-weight: 900;
    margin-left: 25%;
  }
}
}
`