import React from 'react'
import { AboutMe } from '../../Components/AboutMe/AboutMe'
import { RowContainer } from '../../Components/Sections/RowContainer'
import { VelorenCard } from '../../Components/VelorenCard/VelorenCard'

export const Home = () => {
  return (
    <div>
      <RowContainer color="blue">
        <AboutMe />
      </RowContainer>
      <VelorenCard />
    </div>
  )
}