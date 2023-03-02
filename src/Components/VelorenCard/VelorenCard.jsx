import styled from 'styled-components'
import { RowContainer } from '../Sections/RowContainer'
import { VelorenHeader } from './VelorenHeader'
import audio from "../../Assets/Audio/the-quiet-after-the-battle.wav"
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const VelorenCard = () => {
    const [expand, setExpand] = useState(false)
    const handleExpand = () => {
        setExpand((state) => !state)
    }
  return (
    <StyledVelorenCard>
        <VelorenHeader />
        <RowContainer>
        <h1 className="v-title">Music Production & Sound Effect Design</h1>
        {expand ? 
        <><h2 onClick={handleExpand}>Hide full article ↑</h2>
        <figure>
            <figcaption className="section-1">
                <p>Veloren is an Open Source video game, and has a great community, of developers working on the game in their free time. The game inspired me a lot, so I composed and produced a soundtrack called "The Quiet After the Battle" that was later added to the game.</p>
                <p>I also worked on some sound effects for the game, however these are not yet implemented.</p>
                <Link target="_blank" rel="noopener" to="https://veloren.net">More info on Veloren Official Website</Link>
            </figcaption>
            <div className="section-2">
                <p>The soundtrack is very calming, therefore along with the team, I decided that the music only should be played, at night in the many towns and villages, spread out across the world of Veloren.</p>
                <p>You can view the Youtube video with the soundtrack <Link target="_blank" rel="noopener" to="https://youtu.be/yNxxCwwKyes?t=7269">here.</Link> Or on Soundcloud <Link target="_blank" to="https://soundcloud.com/thyofficial/47h2349e17a815?si=f07865396d2c400d980d4acbdeeb5d22&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">here.</Link></p>
                <audio src={audio} controls={true}/>
            </div>
        </figure></> : <h2 onClick={handleExpand}>Expand full article ↓</h2>}
        </RowContainer>
    </StyledVelorenCard>
  )
}

const StyledVelorenCard = styled.article`
@media only screen and (max-width: 600px) {
    margin-top: 6vw;
    margin-bottom: 10vw;
    .v-title {
        font-size: 6vw;
        margin: 1.5vw 0;
        text-align: center;
    }
    text-align: center;
    h2 {
        font-size: 6vw;
        margin: 1vw auto;
        cursor: pointer;
        display: inline-block;
        text-shadow: 0px 0px 0px ${props => props.theme.colors.primary};
        transition: 200ms;
        color: ${props => props.theme.colors.primary};
        transition: 200ms;
        &:hover{
            text-shadow: 0px 0px 5px ${props => props.theme.colors.primary};
        }
    }
figure {
    figcaption {
        margin: 1vw auto;
        width: 100%;
        p {
            width: 90%;
            margin: 10vw auto;
            font-family: 'Cabin', sans-serif;
            font-size: 5vw;
            letter-spacing: 2px;
            text-align: center;
        }
        a {
            width: 90%;
            text-align: center;
            color: ${props => props.theme.colors.primary};
            font-family: 'Cabin', sans-serif;
            font-size: 6vw;
            font-weight: 800;
            margin: 1vw auto;
            display: block;
        }
    }
    .section-2 {
        p {
            text-align: center;
            width: 90%;
            margin: 10vw auto;
            font-family: 'Cabin', sans-serif;
            font-size: 5vw;
            letter-spacing: 2px;
        }
        a {
            text-align: center;
            color: ${props => props.theme.colors.primary};
            font-family: 'Cabin', sans-serif;
            font-size: 5vw;
            font-weight: 800;
        }
        audio {
            filter: grayscale(100%);
            height: 10vw;
            width: 90%;
            margin-top: 1vw;
        }
    }
}
}
@media only screen and (min-width: 600px) {
margin-top: 6vw;
margin-bottom: 10vw;
.v-title {
    font-size: 1.8vw;
    margin: 1.5vw 0;
    text-align: center;
}
text-align: center;
h2 {
    font-size: 1.5vw;
    margin: -1vw auto 1vw auto;
    cursor: pointer;
    display: inline-block;
    text-shadow: 0px 0px 0px ${props => props.theme.colors.primary};
    transition: 200ms;
    color: ${props => props.theme.colors.primary};
    transition: 200ms;
    &:hover{
        text-shadow: 0px 0px 5px ${props => props.theme.colors.primary};
    }
}
figure {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 2vw;
    figcaption {
        width: 100%;
        margin: 0;
        p {
            margin-bottom: 1.5vw;
            font-family: 'Cabin', sans-serif;
            font-size: 1.2vw;
            letter-spacing: 2px;
        }
        a {
            color: ${props => props.theme.colors.primary};
            font-family: 'Cabin', sans-serif;
            font-size: 1.2vw;
            font-weight: 800;
        }
    }
    .section-2 {
        p {
            margin-bottom: 2.6vw;
            font-family: 'Cabin', sans-serif;
            font-size: 1.2vw;
            letter-spacing: 2px;
        }
        a {
            color: ${props => props.theme.colors.primary};
            font-family: 'Cabin', sans-serif;
            font-size: 1.2vw;
            font-weight: 800;
        }
        audio {
            filter: grayscale(100%) invert(100%);
            height: 2.5vw;
            width: 100%;
        }
    }
}
}
`