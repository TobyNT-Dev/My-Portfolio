import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { RowContainer } from '../Sections/RowContainer'
import { VelorenHeader } from './VelorenHeader'
import audio from "../../Assets/Audio/the-quiet-after-the-battle.wav"

export const VelorenCard = () => {
  return (
    <StyledVelorenCard>
        <VelorenHeader />
        <RowContainer>
        <h1 className="v-title">Music Production & Sound Effect Design</h1>
        <figure>
            <figcaption className="section-1">
                <p>Veloren is an Open Source video game, and has a great community, of developers working on the game in their free time. The game inspired me a lot, so I composed and produced a soundtrack called "The Quiet After the Battle" that was later added to the game.</p>
                <p>I also worked on some sound effects for the game, these are not yet implemented.</p>
                <a target="_blank" href="https://veloren.net">More info on Veloren Official Website</a>
            </figcaption>
            <div className="section-2">
                <p>The soundtrack is very calming, therefore I along with the team, decided that the music only should be played, at night in the many towns and villages, spread out across the world of Veloren.</p>
                <p>You can view the Youtube video with the soundtrack <a target="_blank" href="https://youtu.be/yNxxCwwKyes?t=7269">here.</a> Or on Soundcloud <a target="_blank" href="https://soundcloud.com/thyofficial/47h2349e17a815?si=f07865396d2c400d980d4acbdeeb5d22&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">here.</a></p>
                <audio src={audio} controls={true}/>
            </div>
        </figure>
        </RowContainer>
    </StyledVelorenCard>
  )
}

const StyledVelorenCard = styled.article`
margin-top: 6vw;
margin-bottom: 10vw;
.v-title {
    font-size: 1.8vw;
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
            font-size: 1.1vw;
            letter-spacing: 2px;
        }
        a {
            color: ${props => props.theme.colors.primary};
            font-family: 'Cabin', sans-serif;
            font-size: 1.1vw;
            font-weight: 800;
        }
    }
    .section-2 {
        p {
            margin-bottom: 1vw;
            font-family: 'Cabin', sans-serif;
            font-size: 1.1vw;
            letter-spacing: 2px;
        }
        a {
            color: ${props => props.theme.colors.primary};
            font-family: 'Cabin', sans-serif;
            font-size: 1.1vw;
            font-weight: 800;
        }
        audio {
            filter: grayscale(100%) invert(100%);
            height: 2.5vw;
            width: 100%;
        }
    }
}
`