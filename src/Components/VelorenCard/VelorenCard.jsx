import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { RowContainer } from '../Sections/RowContainer'
import { VelorenHeader } from './VelorenHeader'
import YouTubePlayer from './YoutubePlayer'

export const VelorenCard = () => {
  return (
    <StyledVelorenCard>
        <VelorenHeader />
        <RowContainer>
        <h1 className="v-title">Music Production & Sound Effect Design</h1>
        <figure>
            <figcaption>
                <p>Veloren is an Open Source video game, and has a great community, of developers working on the game in their free time. The game inspired me a lot, so I composed and produced a soundtrack that was later added to the game.</p>
                <p>The soundtrack is very calming, therefore I along with the team, decided that the music only should be played, at night in the many towns and villages, spread out across the world of Veloren.</p>
                <p>I also worked on some sound effects for the game, these were however never implemented.</p>
                <a target="_blank" href="https://veloren.net">More about it here</a>
            </figcaption>
            {/* <YouTubePlayer /> */}
        </figure>
        </RowContainer>
    </StyledVelorenCard>
  )
}

const StyledVelorenCard = styled.article`
.v-title {
    font-family: 'Cabin', sans-serif;
    font-size: 1.5vw;
    margin: 1.5vw 0;
    text-align: center;
}
figure {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 2vw;
    figcaption {
        width: 100%;
        p {
            margin-bottom: 1.5vw;
            font-family: 'Cabin', sans-serif;
            font-size: 1.2vw;
            letter-spacing: 2px;
        }
        a {
            color: #f20046;
            font-family: 'Cabin', sans-serif;
            font-size: 1.2vw;
            font-weight: 800;
        }
    }
}
`