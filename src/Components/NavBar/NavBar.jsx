import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'
import {ReactComponent as LogoSvg} from '../../Assets/SVG/TobiasThy-Logo.svg'

export const NavBar = () => {
  return (
      <StyledNav>
      <Link to="/"><LogoSvg /></Link>
        <div className="nav-items">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </StyledNav>
  )
}

const StyledNav = styled.nav`
@media only screen and (min-width: 600px) {
  position: sticky;
  z-index: 20;
  top: 0;
  backdrop-filter: blur(5px);
  background: linear-gradient(#00000052, #02020200);
  .nav-items {
      z-index: 5;
      display: flex;
      justify-content: flex-end;
      margin: 1vw;
      a {
          color: ${props => props.theme.colors.onBackground};
          text-decoration: none;
          font-size: 1.5vw;
          margin-right: 4vw;
          transition: 200ms;
          padding: 0.3vw 0.5vw;
          border-radius: 4px;
          font-weight: 900;
          text-shadow: 0px 0px 0px ${props => props.theme.colors.primary};
          &:hover {
            text-shadow: 0px 0px 10px ${props => props.theme.colors.primary};
            transition: 200ms;
            color: ${props => props.theme.colors.primary};
          }
        }
      }
      svg {
        position: absolute;
        width: 3.5vw;
        margin: 0.3vw 4vw;
        z-index: 10;
        .cls-1 {
      fill: ${props => props.theme.colors.onBackground};
      transition: 1000ms;
    }
    &:hover {
      .cls-1 {
        fill: ${props => props.theme.colors.primary};
        transition: 250ms;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  position: sticky;
  z-index: 20;
  top: 0;
  backdrop-filter: blur(5px);
  background: linear-gradient(#00000052, #02020200);
  .nav-items {
      z-index: 5;
      display: flex;
      justify-content: space-around;
      a {
          color: ${props => props.theme.colors.onBackground};
          text-decoration: none;
          font-size: 6vw;
          margin: 1.5vw 0;
          transition: 200ms;
          padding: 0.3vw 0.5vw;
          border-radius: 4px;
          font-weight: 900;
          text-shadow: 0px 0px 0px ${props => props.theme.colors.primary};
          &:hover {
            text-shadow: 0px 0px 10px ${props => props.theme.colors.primary};
            transition: 200ms;
            color: ${props => props.theme.colors.primary};
          }
        }
      }
      svg {
        position: absolute;
        width: 0;
        margin: 0;
        z-index: 10;
        .cls-1 {
      fill: ${props => props.theme.colors.onBackground};
      transition: 1000ms;
    }
    &:hover {
      .cls-1 {
        fill: ${props => props.theme.colors.primary};
        transition: 250ms;
      }
    }
  }
}
`