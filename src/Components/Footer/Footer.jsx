import React from 'react'
import styled from 'styled-components'
import { RowContainer } from '../../Components/Sections/RowContainer'

export const Footer = () => {
  return (
    <StyledFooter>
      <RowContainer>
        <h2>Portfolio - Tobias Nedergaard Thy</h2>
      </RowContainer>
    </StyledFooter>
  )
}
const StyledFooter = styled.footer`
background-color: black;
`
