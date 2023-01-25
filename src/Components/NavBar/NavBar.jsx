import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'
import {ReactComponent as LogoSvg} from '../../Assets/SVG/TobiasThy-Logo.svg'

export const NavBar = () => {
  return (
    <div>
      <StyledNav>
      <Link to="/"><LogoSvg /></Link>
        <div className="nav-items">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </StyledNav>
    </div>
  )
}

// f20046-bb0049-84004b-4d004e-150050

const StyledNav = styled.nav`
.nav-items {
    z-index: 5;
    display: flex;
    justify-content: flex-end;
    backdrop-filter: blur(15px);
    margin: 1vw;
    a {
        font-family: 'Cabin', sans-serif;
        color: white;
        text-decoration: none;
        font-size: 1.5vw;
        margin-right: 4vw;
        transition: 200ms;
        &:hover {
            color: #F20046;
            transition: 200ms;
        }
    }
}
svg {
  position: absolute;
  width: 4.5vw;
  margin: 0 4vw;
  z-index: 10;
  .cls-1 {
    fill:#fff;
    transition: 1000ms;
  }
  &:hover {
    .cls-1 {
      fill: #F20046;
      transition: 250ms;
    }
  }
}
`