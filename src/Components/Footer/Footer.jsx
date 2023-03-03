import React from 'react'
import styled from 'styled-components'
import { RowContainer } from '../../Components/Sections/RowContainer'

export const Footer = () => {
  return (
    <StyledFooter>
        <div className="info">
        <h3>Portfolio - Tobias Nedergaard Thy</h3>
        <p>thymusiker@gmail.com</p>
        <p>+45 71 78 07 66</p>
        <p>Aalborg, Denmark</p>
        </div>
        <div className="socials">
        <h3>Connect with me!</h3>
        <a target="_blank" href="https://linkedin.com/in/tobias-thy-73ab91267">LinkedIn</a> <br />
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100010979058230">Facebook</a>
        </div>
    </StyledFooter>
  )
}
const StyledFooter = styled.footer`

@media only screen and (min-width: 600px) {
  padding: 2vw 10vw;
  background-color: black;
  display: flex;
  justify-content: space-around;
  .info {
    h3 {
      font-family: 'Cabin', sans-serif;
      font-size: 1.3vw;
    }
    p {
      color: ${props => props.theme.colors.primary};
      font-family: 'Cabin', sans-serif;
      font-size: 1.1vw;
      font-weight: 800;
    }
  }
  .socials {
    h3 {
      font-family: 'Cabin', sans-serif;
      font-size: 1.3vw;
    }
    a {
    color: ${props => props.theme.colors.primary};
    font-family: 'Cabin', sans-serif;
    font-size: 1.1vw;
    font-weight: 800;
  }
}}

@media only screen and (max-width: 600px) {
padding: 2vw 10vw;
background-color: black;
.info {
  h3 {
    font-family: 'Cabin', sans-serif;
    font-size: 5vw;
  }
  p {
  color: White;
  font-family: 'Cabin', sans-serif;
  font-size: 5vw;
  font-weight: 200;
  line-height: 7vw;
}
}

.socials {
  margin: 5vw 0;
  h3 {
    font-family: 'Cabin', sans-serif;
    font-size: 6vw;
  }
  a {
  color: ${props => props.theme.colors.primary};
  font-family: 'Cabin', sans-serif;
  font-size: 5vw;
  font-weight: 800;
  line-height: 7vw;
}
}}
`
